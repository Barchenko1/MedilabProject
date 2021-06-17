package com.barchenko.project.entity.dto.resp;

import java.util.Date;

public class EmployeeQuoteStatisticDTOResponse {
    private Date dateOfCreate;
    private Number employeeCount;

    public Date getDateOfCreate() {
        return dateOfCreate;
    }

    public void setDateOfCreate(Date dateOfCreate) {
        this.dateOfCreate = dateOfCreate;
    }

    public Number getEmployeeCount() {
        return employeeCount;
    }

    public void setEmployeeCount(Number employeeCount) {
        this.employeeCount = employeeCount;
    }
}
