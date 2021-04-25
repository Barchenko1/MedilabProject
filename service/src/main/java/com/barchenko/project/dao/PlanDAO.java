package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Plan;

import java.util.List;

public interface PlanDAO {
    void getPlanByPlanCode(String planCode);
    List<Plan> getAllPlans();
}
