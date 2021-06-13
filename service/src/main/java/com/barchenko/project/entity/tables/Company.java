package com.barchenko.project.entity.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Long companyId;
    @Column
    private String companyName;
    @Column(name = "contact_phone")
    private String contactPhone;
    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "street")
    private String street;
    @Column
    private String city;
    @Column(name = "house_number")
    private int houseNumber;
    @Column
    private String state;
    @Column(name = "zip_code")
    private int zipCode;
//    @ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name = "address_id", nullable = false)
//    private Address address;
//    @ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name = "plan_id", nullable = false)
//    private Plan plan;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "organizationType_id", nullable = false)
    private OrganizationType organizationType;


    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long proposalId) {
        this.companyId = proposalId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

//    public Address getAddress() {
//        return address;
//    }
//
//    public void setAddress(Address address) {
//        this.address = address;
//    }

//    public Plan getPlan() {
//        return plan;
//    }
//
//    public void setPlan(Plan plan) {
//        this.plan = plan;
//    }


    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public OrganizationType getOrganizationType() {
        return organizationType;
    }

    public void setOrganizationType(OrganizationType organizationType) {
        this.organizationType = organizationType;
    }

//    public OrganizationType getOrganization() {
//        return organizationType;
//    }
//
//    public void setOrganization(OrganizationType organizationType) {
//        this.organizationType = organizationType;
//    }

//    public Set<ProductLine> getProductLines() {
//        return productLines;
//    }
//
//    public void setProductLines(Set<ProductLine> productLines) {
//        this.productLines = productLines;
//    }
}
