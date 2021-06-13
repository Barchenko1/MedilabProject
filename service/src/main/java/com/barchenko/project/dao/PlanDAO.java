package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Plan;

import java.util.List;
import java.util.Optional;

public interface PlanDAO {
    Optional<Plan> getPlanByPlanCode(String planCode);
    Optional<List<Plan>> getPlansByProductLine(String productLine);
}
