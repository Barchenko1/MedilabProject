package com.barchenko.project.entity.dto.resp;

import java.util.Date;

public class DependentDTOResponse {
    private Long dependentId;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private String gender;
    private String relationship;

    public Long getDependentId() {
        return dependentId;
    }

    public void setDependentId(Long dependentId) {
        this.dependentId = dependentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

//    public EmployeeDTOResponse getEmployee() {
//        return employee;
//    }
//
//    public void setEmployee(EmployeeDTOResponse employee) {
//        this.employee = employee;
//    }
}
