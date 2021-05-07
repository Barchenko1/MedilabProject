package com.barchenko.project.entity.dto.req;

import java.util.Date;

public class QuoteDTORequest {
    private String name;
    private Date dateOfExpired;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfExpired() {
        return dateOfExpired;
    }

    public void setDateOfExpired(Date dateOfExpired) {
        this.dateOfExpired = dateOfExpired;
    }
}
