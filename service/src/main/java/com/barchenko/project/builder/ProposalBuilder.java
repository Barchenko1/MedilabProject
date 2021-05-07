package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.Proposal;
import org.springframework.stereotype.Component;

@Component
public class ProposalBuilder {
    public Proposal transformCompanyProfileDTORequestToProposal(CompanyProfileDTORequest companyProfileDTORequest,
                                                                Address address,
                                                                OrganizationType organizationType) {
        Proposal proposal = new Proposal();
        proposal.setCompanyName(companyProfileDTORequest.getCompanyName());
        proposal.setContactEmail(companyProfileDTORequest.getEmail());
        proposal.setContactPhone(companyProfileDTORequest.getPhone());

        proposal.setAddress(address);
        proposal.setOrganization(organizationType);
        return proposal;
    }
}
