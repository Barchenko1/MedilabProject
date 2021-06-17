package com.barchenko.project.entity.dto.resp;

import java.util.Date;

public class QuoteStatisticDTOResponse {
    private Date dateOfCreate;
    private Number quoteCount;

    public Date getDateOfCreate() {
        return dateOfCreate;
    }

    public void setDateOfCreate(Date dateOfCreate) {
        this.dateOfCreate = dateOfCreate;
    }

    public Number getQuoteCount() {
        return quoteCount;
    }

    public void setQuoteCount(Number quoteCount) {
        this.quoteCount = quoteCount;
    }
}
