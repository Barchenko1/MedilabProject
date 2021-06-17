package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.dto.resp.QuoteDTOResponse;
import com.barchenko.project.entity.dto.resp.QuoteStatisticDTOResponse;

import java.util.List;

public interface QuoteService {
    QuoteDTOResponse createQuote(QuoteDTORequest quoteDTORequest);
    QuoteDTOResponse findQuote(String quoteName);

    List<QuoteStatisticDTOResponse> findQuoteCreationStatistic();

}
