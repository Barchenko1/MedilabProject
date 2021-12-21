package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.dto.req.SearchQuoteRequest;
import com.barchenko.project.entity.dto.resp.QuoteDTOResponse;
import com.barchenko.project.entity.dto.resp.QuoteStatisticDTOResponse;
import com.barchenko.project.service.service_contract.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/quote")
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    @RequestMapping(value = "/init", method = RequestMethod.POST)
    public ResponseEntity<QuoteDTOResponse> initQuote(@Valid @RequestBody QuoteDTORequest quoteDTORequest) {
        QuoteDTOResponse quoteDTOResponse = quoteService.createQuote(quoteDTORequest);
        return ResponseEntity.ok(quoteDTOResponse);
    }

    @RequestMapping(value = "/find", method = RequestMethod.POST)
    public ResponseEntity<QuoteDTOResponse> findQuote(@Valid @RequestBody SearchQuoteRequest searchQuoteRequest) {
        QuoteDTOResponse quoteDTOResponse = quoteService.findQuote(searchQuoteRequest.getQuoteName());
        return ResponseEntity.ok(quoteDTOResponse);
    }

    @RequestMapping(value = "/quoteStatistic", method = RequestMethod.GET)
    public ResponseEntity<List<QuoteStatisticDTOResponse>> getQuoteStatistic() {
        List<QuoteStatisticDTOResponse> quoteDTOResponse = quoteService.findQuoteCreationStatistic();
        return ResponseEntity.ok(quoteDTOResponse);
    }
}
