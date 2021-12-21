package com.barchenko.project.service.service_impl;

import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.builder.QuoteBuilder;
import com.barchenko.project.builder.UserPrincipalBuilder;
import com.barchenko.project.dao.dao_contract.QuoteDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionQuoteDAO;
import com.barchenko.project.entity.dto.req.QuoteDTORequest;
import com.barchenko.project.entity.dto.resp.QuoteDTOResponse;
import com.barchenko.project.entity.dto.resp.QuoteStatisticDTOResponse;
import com.barchenko.project.entity.tables.Quote;
import com.barchenko.project.service.service_contract.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuoteServiceImpl implements QuoteService {

    @Autowired
    private UserPrincipalBuilder userPrincipalBuilder;

    @Autowired
    private QuoteBuilder quoteBuilder;

    @Autowired
    private TransactionQuoteDAO transactionQuoteDAO;

    @Autowired
    private QuoteDAO quoteDAO;

    @Override
    public QuoteDTOResponse createQuote(QuoteDTORequest quoteDTORequest) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Quote quote = quoteBuilder.transformQuoteDTORequestToQuote(quoteDTORequest,
                userPrincipalBuilder.transformPrincipalToUser(userPrincipal));
        transactionQuoteDAO.createQuote(quote);
        return quoteBuilder.createQuoteDTOResponseFromQuote(quote);
    }

    @Override
    public QuoteDTOResponse findQuote(String quoteName) {
        Optional<Quote> quote = quoteDAO.findQuoteByName(quoteName);
        if (quote.isEmpty()) {
            throw new IllegalArgumentException("error");
        }
        return quoteBuilder.createQuoteDTOResponseFromQuote(quote.get());
    }

    @Override
    public List<QuoteStatisticDTOResponse> findQuoteCreationStatistic() {
        Optional<List<QuoteStatisticDTOResponse>> optionalQuoteStatisticDTOResponse = quoteDAO.findQuoteCreationStatistic();
        if (optionalQuoteStatisticDTOResponse.isEmpty()) {
            throw new IllegalArgumentException("error");
        }
        return optionalQuoteStatisticDTOResponse.get();
    }
}
