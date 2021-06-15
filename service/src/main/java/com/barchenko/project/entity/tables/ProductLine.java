package com.barchenko.project.entity.tables;

import com.barchenko.project.entity.enums.ProductLineName;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "productLine")
public class ProductLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productLine_id")
    private Long productLineId;
    @Column
    @Enumerated(EnumType.STRING)
    private ProductLineName name;

    public Long getProductLineId() {
        return productLineId;
    }

    public ProductLineName getName() {
        return name;
    }
}
