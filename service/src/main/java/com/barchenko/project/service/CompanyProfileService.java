package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;

public interface CompanyProfileService {
    void saveOrUpdateCompanyProfileData(CompanyProfileDTORequest companyProfileDTORequest);
}
