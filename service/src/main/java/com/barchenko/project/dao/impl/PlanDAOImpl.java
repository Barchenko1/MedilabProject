package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.PlanDAO;
import com.barchenko.project.entity.tables.Plan;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class PlanDAOImpl implements PlanDAO {
    @Override
    public Optional<Plan> getPlanByPlanCode(String planCode) {
        return null;
    }

    @Override
    public Optional<List<Plan>> getAllPlans() {
        return null;
    }
}
