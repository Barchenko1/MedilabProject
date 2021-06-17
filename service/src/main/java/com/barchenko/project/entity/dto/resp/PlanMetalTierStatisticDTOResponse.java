package com.barchenko.project.entity.dto.resp;

public class PlanMetalTierStatisticDTOResponse {
    private String metalTier;
    private Number planCount;

    public String getMetalTier() {
        return metalTier;
    }

    public void setMetalTier(String metalTier) {
        this.metalTier = metalTier;
    }

    public Number getPlanCount() {
        return planCount;
    }

    public void setPlanCount(Number planCount) {
        this.planCount = planCount;
    }
}
