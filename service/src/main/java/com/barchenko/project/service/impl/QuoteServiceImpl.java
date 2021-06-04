package com.barchenko.project.service.impl;

import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.builder.QuoteBuilder;
import com.barchenko.project.builder.UserPrincipalBuilder;
import com.barchenko.project.dao.transaction.TransactionQuoteDAO;
import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.dto.resp.QuoteDTOResponse;
import com.barchenko.project.entity.tables.Quote;
import com.barchenko.project.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class QuoteServiceImpl implements QuoteService {

    @Autowired
    private UserPrincipalBuilder userPrincipalBuilder;

    @Autowired
    private QuoteBuilder quoteBuilder;

    @Autowired
    private TransactionQuoteDAO transactionQuoteDAO;

    @Override
    public QuoteDTOResponse createQuote(QuoteDTORequest quoteDTORequest) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Quote quote = quoteBuilder.transformQuoteDTORequestToQuote(quoteDTORequest,
                userPrincipalBuilder.transformPrincipalToUser(userPrincipal));
        transactionQuoteDAO.createQuote(quote);
        return createQuoteDTOResponse(quote);
    }

    private QuoteDTOResponse createQuoteDTOResponse(Quote quote) {
        QuoteDTOResponse quoteDTOResponse = new QuoteDTOResponse();
        quoteDTOResponse.setQuoteId(quote.getQuoteId());
        quoteDTOResponse.setQuoteName(quote.getName());
        return quoteDTOResponse;
    }
}
