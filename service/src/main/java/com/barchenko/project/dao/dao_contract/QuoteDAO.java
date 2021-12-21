package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.dto.resp.QuoteStatisticDTOResponse;
import com.barchenko.project.entity.tables.Quote;

import java.util.List;
import java.util.Optional;

public interface QuoteDAO {
    Quote createQuote(Quote quote);
    Optional<Quote> findQuoteById(long id);
    Optional<Quote> findQuoteByName(String name);
    Optional<List<Quote>> findQuoteByUsernameOrEmail(String username, String email);
    void updateQuote(Quote quote);
    void deleteQuote(Quote quote);

    Optional<List<QuoteStatisticDTOResponse>> findQuoteCreationStatistic();
}
