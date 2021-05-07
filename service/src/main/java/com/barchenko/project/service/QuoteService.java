package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;

public interface QuoteService {
    void createQuote(QuoteDTORequest quoteDTORequest);
}
