package com.barchenko.project.dao.transaction.transaction_contract;

import com.barchenko.project.entity.tables.Quote;

public interface TransactionQuoteDAO {
    public Quote createQuote(Quote quote);
}
