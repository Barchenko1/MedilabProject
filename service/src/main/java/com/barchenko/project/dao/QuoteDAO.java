package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Quote;

public interface QuoteDAO {
    void createQuote(Quote quote);
    Quote findQuoteByName(String name);
    Quote findQuoteByXhref(String xhref);
    void updateQuote(Quote proposal);
    void deleteQuote(Quote proposal);
}
