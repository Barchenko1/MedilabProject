package com.barchenko.project.entity.dto.req;

import java.util.Date;

public class QuoteDTORequest {
    private String name;
    private Date dateOfExpire;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfExpire() {
        return dateOfExpire;
    }

    public void setDateOfExpire(Date dateOfExpire) {
        this.dateOfExpire = dateOfExpire;
    }
}
