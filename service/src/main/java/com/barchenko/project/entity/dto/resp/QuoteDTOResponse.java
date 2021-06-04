package com.barchenko.project.entity.dto.resp;

public class QuoteDTOResponse {
    private long quoteId;
    private String quoteName;

    public long getQuoteId() {
        return quoteId;
    }

    public void setQuoteId(long quoteId) {
        this.quoteId = quoteId;
    }

    public String getQuoteName() {
        return quoteName;
    }

    public void setQuoteName(String quoteName) {
        this.quoteName = quoteName;
    }
}
