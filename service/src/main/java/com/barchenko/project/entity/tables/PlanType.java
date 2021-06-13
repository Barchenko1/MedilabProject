package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.PlanTypeName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "type")
public class PlanType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private Long typeId;
    @Enumerated(EnumType.STRING)
    @Column
    private PlanTypeName name;

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    public PlanTypeName getName() {
        return name;
    }

    public void setName(PlanTypeName name) {
        this.name = name;
    }
}
