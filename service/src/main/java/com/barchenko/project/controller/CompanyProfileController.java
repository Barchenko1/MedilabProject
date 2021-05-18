package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.CompanyProfileDTORequest;
import com.barchenko.project.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @RequestMapping(value = "/addCompanyData", method = RequestMethod.POST)
    public ResponseEntity<?> addEmployeeData(@Valid @RequestBody CompanyProfileDTORequest companyProfileDTORequest) {
        companyProfileService.saveOrUpdateCompanyProfileData(companyProfileDTORequest);
        return ResponseEntity.ok("Successful");
    }

}