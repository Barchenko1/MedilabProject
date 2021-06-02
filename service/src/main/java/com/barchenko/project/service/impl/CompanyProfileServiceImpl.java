package com.barchenko.project.service.impl;

import com.barchenko.project.builder.AddressBuilder;
import com.barchenko.project.builder.ProposalBuilder;
import com.barchenko.project.dao.OrganizationTypeDAO;
import com.barchenko.project.dao.ProductLineDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.enums.OrganizationName;
import com.barchenko.project.entity.enums.ProductLineName;
import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.ProductLine;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
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

    @Override
    public void saveOrUpdateCompanyProfileData(CompanyProfileDTORequest companyProfileDTORequest) {
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
        transactionCompanyProfileDAO.saveOrUpdateCompanyProfileData(proposal, address);
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

}
