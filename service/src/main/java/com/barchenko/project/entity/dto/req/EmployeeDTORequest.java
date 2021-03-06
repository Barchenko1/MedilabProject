package com.barchenko.project.entity.dto.req;

import com.barchenko.project.entity.dto.req.DependentDTORequest;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EmployeeDTORequest {
    private Long employeeId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date birthdate;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date dateOfHire;
    private int hoursOfWork;
    private int salary;
    private String gender;
    private List<DependentDTORequest> dependents = new ArrayList<>();

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

    public List<DependentDTORequest> getDependents() {
        return dependents;
    }

    public void setDependents(List<DependentDTORequest> dependents) {
        this.dependents = dependents;
    }
}
