package com.barchenko.project.entity.dto.resp;

public class PlanResponseDTO {
    private long planId;
    private String planName;
    private String planCode;
    private int totalMonthlyCost;
    private int deductible;
    private String planClass;
    private String metalTier;
    private String planType;

    public long getPlanId() {
        return planId;
    }

    public void setPlanId(long planId) {
        this.planId = planId;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getPlanCode() {
        return planCode;
    }

    public void setPlanCode(String planCode) {
        this.planCode = planCode;
    }

    public int getTotalMonthlyCost() {
        return totalMonthlyCost;
    }

    public void setTotalMonthlyCost(int totalMonthlyCost) {
        this.totalMonthlyCost = totalMonthlyCost;
    }

    public int getDeductible() {
        return deductible;
    }

    public void setDeductible(int deductible) {
        this.deductible = deductible;
    }

    public String getPlanClass() {
        return planClass;
    }

    public void setPlanClass(String planClass) {
        this.planClass = planClass;
    }

    public String getMetalTier() {
        return metalTier;
    }

    public void setMetalTier(String metalTier) {
        this.metalTier = metalTier;
    }

    public String getPlanType() {
        return planType;
    }

    public void setPlanType(String planType) {
        this.planType = planType;
    }
}
