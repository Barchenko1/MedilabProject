package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.OrganizationName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "organizationType")
public class OrganizationType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "organizationType_id")
    private Long organizationId;
    @Enumerated(EnumType.STRING)
    @Column
    private OrganizationName name;

    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
    }

    public OrganizationName getName() {
        return name;
    }

    public void setName(OrganizationName name) {
        this.name = name;
    }
}
