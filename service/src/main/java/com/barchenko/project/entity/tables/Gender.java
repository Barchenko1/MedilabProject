package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.GenderName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gender")
public class Gender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gender_id")
    private Long genderId;
    @Column
    @Enumerated(EnumType.STRING)
    private GenderName name;

    public Gender() {
    }

    public Gender(GenderName name) {
        this.name = name;
    }

    public Long getGenderId() {
        return genderId;
    }

    public void setGenderId(Long genderId) {
        this.genderId = genderId;
    }

    public GenderName getName() {
        return name;
    }

    public void setName(GenderName name) {
        this.name = name;
    }
}
