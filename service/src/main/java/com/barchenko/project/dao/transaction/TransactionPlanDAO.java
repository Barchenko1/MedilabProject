package com.barchenko.project.dao.transaction;

public interface TransactionPlanDAO {
    void addPlanToQuote(long quoteId, String planCode);
}
