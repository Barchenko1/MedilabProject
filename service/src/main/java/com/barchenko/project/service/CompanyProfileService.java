package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.dto.resp.CompanyDTOResponse;

public interface CompanyProfileService {
    void saveOrUpdateCompanyProfileData(long quoteId, CompanyProfileDTORequest companyProfileDTORequest);
    CompanyDTOResponse getCompanyByQuoteId(long quoteId);
}
