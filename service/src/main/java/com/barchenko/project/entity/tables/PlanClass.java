package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.MetalTierName;

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
    @Column(name = "classId")
    private Long classId;
    @Enumerated(EnumType.STRING)
    @Column
    private MetalTierName name;
}
