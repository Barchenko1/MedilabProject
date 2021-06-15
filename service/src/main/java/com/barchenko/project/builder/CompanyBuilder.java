package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.dto.resp.CompanyDTOResponse;
import com.barchenko.project.entity.tables.OrganizationType;
import com.barchenko.project.entity.tables.Company;
import org.springframework.stereotype.Component;

@Component
public class CompanyBuilder {
    public Company transformCompanyProfileDTORequestToCompany(CompanyProfileDTORequest companyProfileDTORequest,
                                                               OrganizationType organizationType) {
        Company company = new Company();
        company.setCompanyName(companyProfileDTORequest.getCompanyName());
        company.setContactEmail(companyProfileDTORequest.getEmail());
        company.setContactPhone(companyProfileDTORequest.getPhone());
        company.setStreet(companyProfileDTORequest.getAddress());
        company.setCity(companyProfileDTORequest.getCity());
        company.setState(companyProfileDTORequest.getState());
        company.setZipCode(companyProfileDTORequest.getZipCode());
        company.setHouseNumber(companyProfileDTORequest.getHouseNumber());
        company.setOrganizationType(organizationType);
        return company;
    }

    public CompanyDTOResponse transformCompanyToCompanyDTOResponse(Company company) {
        CompanyDTOResponse companyDTOResponse = new CompanyDTOResponse();
        companyDTOResponse.setCompanyId(company.getCompanyId());
        companyDTOResponse.setCompanyName(company.getCompanyName());
        companyDTOResponse.setContactPhone(company.getContactPhone());
        companyDTOResponse.setContactEmail(company.getContactEmail());
        companyDTOResponse.setHouseNumber(company.getHouseNumber());
        companyDTOResponse.setStreet(company.getStreet());
        companyDTOResponse.setCity(company.getCity());
        companyDTOResponse.setState(company.getState());
        companyDTOResponse.setZipCode(company.getZipCode());
        companyDTOResponse.setOrganizationType(company.getOrganizationType().getName().name());
        return companyDTOResponse;
    }
}
