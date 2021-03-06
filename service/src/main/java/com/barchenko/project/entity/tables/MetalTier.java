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
@Table(name = "metalTier")
public class MetalTier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "metalTier_id")
    private Long metalTierId;
    @Enumerated(EnumType.STRING)
    @Column
    private MetalTierName name;

    public Long getMetalTierId() {
        return metalTierId;
    }

    public void setMetalTierId(Long metalTierId) {
        this.metalTierId = metalTierId;
    }

    public MetalTierName getName() {
        return name;
    }

    public void setName(MetalTierName name) {
        this.name = name;
    }
}
