package com.barchenko.project.dao.transaction.transaction_contract;

public interface TransactionPlanDAO {
    void addPlanToQuote(long quoteId, String planCode);
}
