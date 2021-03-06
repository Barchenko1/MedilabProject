package com.barchenko.project.entity.tables;

import org.hibernate.annotations.OptimisticLock;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "plan")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_id")
    private Long planId;
    @Column(name = "name")
    private String planName;
    @Column(name = "code")
    private String planCode;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "class_id", nullable = false)
    private PlanClass planClass;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "type_id", nullable = false)
    private PlanType planType;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "metalTier_id", nullable = false)
    private MetalTier metalTier;
    @Column
    private int deductible;
    @Column
    private int monthCost;

    public Long getPlanId() {
        return planId;
    }

    public void setPlanId(Long planId) {
        this.planId = planId;
    }

    public String getPlanCode() {
        return planCode;
    }

    public void setPlanCode(String planCode) {
        this.planCode = planCode;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public PlanClass getPlanClass() {
        return planClass;
    }

    public void setPlanClass(PlanClass planClass) {
        this.planClass = planClass;
    }

    public PlanType getPlanType() {
        return planType;
    }

    public void setPlanType(PlanType planType) {
        this.planType = planType;
    }

    public MetalTier getMetalTier() {
        return metalTier;
    }

    public void setMetalTier(MetalTier metalTier) {
        this.metalTier = metalTier;
    }

    public int getDeductible() {
        return deductible;
    }

    public void setDeductible(int deductible) {
        this.deductible = deductible;
    }

    public int getMonthCost() {
        return monthCost;
    }

    public void setMonthCost(int monthCost) {
        this.monthCost = monthCost;
    }
}
