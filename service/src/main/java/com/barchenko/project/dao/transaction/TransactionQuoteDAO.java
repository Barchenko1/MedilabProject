package com.barchenko.project.dao.transaction;

import com.barchenko.project.entity.tables.Quote;

public interface TransactionQuoteDAO {
    public Quote createQuote(Quote quote);
}
