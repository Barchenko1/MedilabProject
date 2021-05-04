package com.barchenko.project.entity.tables;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "dependent")
public class Dependent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dependent_id")
    private Long dependentId;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private Date birthdate;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "gender_id", nullable = false)
    private Gender gender;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "relationship_id", nullable = false)
    private Relationship relationship;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    public Dependent() {
    }

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

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Relationship getRelationship() {
        return relationship;
    }

    public void setRelationship(Relationship relationship) {
        this.relationship = relationship;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
