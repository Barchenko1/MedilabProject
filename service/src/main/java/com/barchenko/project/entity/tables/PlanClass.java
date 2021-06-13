package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.PlanClassName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "class")
public class PlanClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private Long classId;
    @Enumerated(EnumType.STRING)
    @Column
    private PlanClassName name;

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public PlanClassName getName() {
        return name;
    }

    public void setName(PlanClassName name) {
        this.name = name;
    }
}
