package com.barchenko.project.entity.dto.resp;


import com.barchenko.project.entity.tables.Dependent;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

public class EmployeeDTOResponse {
    private Long employeeId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private Date birthdate;
    private Date dateOfHire;
    private int hoursOfWork;
    private int salary;
    private String gender;
    private String status;
    private List<DependentDTOResponse> dependents;


    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Date getDateOfHire() {
        return dateOfHire;
    }

    public void setDateOfHire(Date dateOfHire) {
        this.dateOfHire = dateOfHire;
    }

    public int getHoursOfWork() {
        return hoursOfWork;
    }

    public void setHoursOfWork(int hoursOfWork) {
        this.hoursOfWork = hoursOfWork;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<DependentDTOResponse> getDependents() {
        return dependents;
    }

    public void setDependents(List<DependentDTOResponse> dependents) {
        this.dependents = dependents;
    }

//    public List<Dependent> getDependents() {
//        return dependents;
//    }
//
//    public void setDependents(List<Dependent> dependents) {
//        this.dependents = dependents;
//    }
}
