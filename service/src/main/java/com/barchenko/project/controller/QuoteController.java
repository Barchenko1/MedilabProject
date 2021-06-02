package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/quote")
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    @RequestMapping(value = "/init", method = RequestMethod.POST)
    public ResponseEntity<?> initQuote(@Valid @RequestBody QuoteDTORequest quoteDTORequest) {
        quoteService.createQuote(quoteDTORequest);
        return ResponseEntity.ok("Successful");
    }
}
