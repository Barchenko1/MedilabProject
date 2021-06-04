package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Quote;

import java.util.List;
import java.util.Optional;

public interface QuoteDAO {
    Quote createQuote(Quote quote);
    Optional<Quote> findQuoteById(long id);
    Quote findQuoteByName(String name);
    Quote findQuoteByXhref(String xhref);
    Optional<List<Quote>> findQuoteByUsernameOrEmail(String username, String email);
    void updateQuote(Quote quote);
    void deleteQuote(Quote quote);
}
