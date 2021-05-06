package com.barchenko.project.entity.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long addressId;
    @Column(name = "street")
    private String street;
    @Column
    private String city;
    @Column(name = "house_number")
    private String houseNumber;
    @Column
    private String state;
    @Column(name = "zip_code")
    private int zipCode;
}
