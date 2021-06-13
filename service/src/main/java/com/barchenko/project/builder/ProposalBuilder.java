package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.tables.Company;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.ProductLine;
import com.barchenko.project.entity.tables.Proposal;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class ProposalBuilder {
    public Proposal transformCompanyProfileDTORequestToProposal(Company company,
                                                                int discount,
                                                                Set<ProductLine> productLines) {
        Proposal proposal = new Proposal();
        proposal.setCompany(company);
        proposal.setDiscount(discount);
        proposal.setProductLines(productLines);
        return proposal;
    }
}
