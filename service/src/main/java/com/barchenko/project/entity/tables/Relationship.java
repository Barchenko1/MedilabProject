package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.RelationshipName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "relationship")
public class Relationship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "relationship_id")
    private Long relationShipId;
    @Column
    @Enumerated(EnumType.STRING)
    private RelationshipName name;

    public Long getRelationShipId() {
        return relationShipId;
    }

    public RelationshipName getName() {
        return name;
    }
}
