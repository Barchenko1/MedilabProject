package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.dto.resp.QuoteDTOResponse;

public interface QuoteService {
    QuoteDTOResponse createQuote(QuoteDTORequest quoteDTORequest);
    QuoteDTOResponse findQuote(String quoteName);
}
