package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;

public interface CompanyProfileService {
    void saveOrUpdateCompanyProfileData(long quoteId, CompanyProfileDTORequest companyProfileDTORequest);
}
