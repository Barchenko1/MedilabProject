package com.barchenko.project.service.impl;

import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.builder.AddressBuilder;
import com.barchenko.project.builder.ProposalBuilder;
import com.barchenko.project.dao.OrganizationTypeDAO;
import com.barchenko.project.dao.ProductLineDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.enums.OrganizationName;
import com.barchenko.project.entity.enums.ProductLineName;
import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.ProductLine;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.entity.tables.Quote;
import com.barchenko.project.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class CompanyProfileServiceImpl implements CompanyProfileService {

    @Autowired
    private TransactionCompanyProfileDAO transactionCompanyProfileDAO;

    @Autowired
    private OrganizationTypeDAO organizationTypeDAO;

    @Autowired
    private AddressBuilder addressBuilder;

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
        Address address = addressBuilder.transformCompanyProfileToAddress(companyProfileDTORequest);
        Set<ProductLine> productLines = transformFlagsToProductLines(companyProfileDTORequest);
        Proposal proposal = proposalBuilder
                .transformCompanyProfileDTORequestToProposal(
                        companyProfileDTORequest,
                        address,
                        organizationType,
                        productLines);
        Optional<Quote> quoteOptional = quoteDAO.findQuoteById(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new IllegalStateException("error");
        }
        quoteOptional.get().setProposal(proposal);
        transactionCompanyProfileDAO.saveOrUpdateCompanyProfileData(quoteOptional.get(), proposal, address);
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
        return !quoteDAO.findQuoteByUsernameOrEmail(userPrincipal.getUsername(), userPrincipal.getEmail()).isPresent();
    }

}
