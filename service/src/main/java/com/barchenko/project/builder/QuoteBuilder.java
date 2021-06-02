package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.tables.Quote;
import com.barchenko.project.entity.tables.User;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class QuoteBuilder {
    public Quote transformQuoteDTORequestToQuote(QuoteDTORequest quoteDTORequest, User user) {
        Quote quote = new Quote();
        quote.setName(quoteDTORequest.getName());
        quote.setDateOfCreate(new Date());
        quote.setDateOfExpire(quoteDTORequest.getDateOfExpire());
        quote.setCreator(user);
        return quote;
    }
}
