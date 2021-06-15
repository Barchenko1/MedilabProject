package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.entity.dto.resp.CompanyDTOResponse;
import com.barchenko.project.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/company-profile")
public class CompanyProfileController {

    @Autowired
    private CompanyProfileService companyProfileService;

    @RequestMapping(value = "/{quoteId}/addCompanyData", method = RequestMethod.POST)
    public ResponseEntity<?> addCompanyData(
            @PathVariable("quoteId") long quoteId,
            @Valid @RequestBody CompanyProfileDTORequest companyProfileDTORequest) {
        companyProfileService.saveOrUpdateCompanyProfileData(quoteId, companyProfileDTORequest);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value = "/{quoteId}/getCompany", method = RequestMethod.GET)
    public CompanyDTOResponse findCompanyByQuoteId(
            @PathVariable("quoteId") long quoteId) {
        return companyProfileService.getCompanyByQuoteId(quoteId);
    }

}
