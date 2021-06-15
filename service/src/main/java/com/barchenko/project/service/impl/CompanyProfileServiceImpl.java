package com.barchenko.project.service.impl;

import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.builder.CompanyBuilder;
import com.barchenko.project.builder.ProposalBuilder;
import com.barchenko.project.dao.CompanyDAO;
import com.barchenko.project.dao.OrganizationTypeDAO;
import com.barchenko.project.dao.ProductLineDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.dto.resp.CompanyDTOResponse;
import com.barchenko.project.entity.enums.OrganizationName;
import com.barchenko.project.entity.enums.ProductLineName;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.ProductLine;
import com.barchenko.project.entity.tables.Company;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class CompanyProfileServiceImpl implements CompanyProfileService {

    @Autowired
    private CompanyDAO companyDAO;

    @Autowired
    private TransactionCompanyProfileDAO transactionCompanyProfileDAO;

    @Autowired
    private OrganizationTypeDAO organizationTypeDAO;

    @Autowired
    private CompanyBuilder companyBuilder;

    @Autowired
    private ProposalBuilder proposalBuilder;

    @Autowired
    private ProductLineDAO productLineDAO;

    @Autowired
    private QuoteDAO quoteDAO;

    @Override
    public void saveOrUpdateCompanyProfileData(long quoteId, CompanyProfileDTORequest companyProfileDTORequest) {
        if (isUserCreatedQuote()) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.
            throw new IllegalStateException("error");
        }
        OrganizationType organizationType = organizationTypeDAO
                .getOrganizationTypeByName(
                        transformRequestOrganizationTypeToString(companyProfileDTORequest.getOrganizationType().toUpperCase()));
        Set<ProductLine> productLines = transformFlagsToProductLines(companyProfileDTORequest);
        Company company = companyBuilder
                .transformCompanyProfileDTORequestToCompany(
                        companyProfileDTORequest,
                        organizationType);
        Proposal proposal = proposalBuilder.transformCompanyProfileDTORequestToProposal(company,
                companyProfileDTORequest.getDiscount(),
                productLines);
        transactionCompanyProfileDAO.saveOrUpdateCompanyProfileData(quoteId, proposal, company);
    }

    @Override
    public CompanyDTOResponse getCompanyByQuoteId(long quoteId) {
        if (isUserCreatedQuote()) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.
            throw new IllegalStateException("error");
        }
        Optional<Company> optionalCompany = companyDAO.findCompanyByQuoteIdEM(quoteId);
        if (optionalCompany.isEmpty()) {
            throw new IllegalStateException("error");
        }
        return companyBuilder.transformCompanyToCompanyDTOResponse(optionalCompany.get());
    }

    private String transformRequestOrganizationTypeToString(String requestOrganizationType) {
        return Arrays.stream(OrganizationName.values())
                .filter(value -> requestOrganizationType.equalsIgnoreCase(value.getValue()))
                .findFirst()
                .map(Enum::name)
                .orElseThrow(() -> new IllegalArgumentException("No constant found"));
    }

    private Set<ProductLine> transformFlagsToProductLines(CompanyProfileDTORequest companyProfileDTORequest) {
        Set<ProductLine> productLines = new HashSet<>();
        if (companyProfileDTORequest.isMedical()) {
            productLines.add(productLineDAO.getProductLineByName(ProductLineName.MEDICAL.name()));
        }
        if (companyProfileDTORequest.isDental()) {
            productLines.add(productLineDAO.getProductLineByName(ProductLineName.DENTAL.name()));
        }
        if (companyProfileDTORequest.isVision()) {
            productLines.add(productLineDAO.getProductLineByName(ProductLineName.VISION.name()));
        }
        if (companyProfileDTORequest.isLife()) {
            productLines.add(productLineDAO.getProductLineByName(ProductLineName.LIFE.name()));
        }
        return productLines;
    }

    private boolean isUserCreatedQuote() {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return quoteDAO.findQuoteByUsernameOrEmail(userPrincipal.getUsername(), userPrincipal.getEmail()).isEmpty();
    }

}
