package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.tables.Address;
import org.springframework.stereotype.Component;

@Component
public class AddressBuilder {
    public Address transformCompanyProfileToAddress(CompanyProfileDTORequest companyProfileDTORequest) {
        Address address = new Address();
        address.setHouseNumber(companyProfileDTORequest.getHouseNumber());
        address.setStreet(companyProfileDTORequest.getAddress());
        address.setCity(companyProfileDTORequest.getCity());
        address.setState(companyProfileDTORequest.getState());
        address.setZipCode(companyProfileDTORequest.getZipCode());
        return address;
    }
}
