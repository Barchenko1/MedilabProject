package com.barchenko.project.service;

import com.barchenko.project.builder.QuoteBuilder;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.tables.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteServiceImpl implements QuoteService {

    @Autowired
    private QuoteDAO quoteDAO;

    @Autowired
    private QuoteBuilder quoteBuilder;

    @Override
    public void createQuote(QuoteDTORequest quoteDTORequest) {
        Quote quote = quoteBuilder.transformQuoteDTORequestToQuote(quoteDTORequest);
        quoteDAO.createQuote(quote);
    }
}
