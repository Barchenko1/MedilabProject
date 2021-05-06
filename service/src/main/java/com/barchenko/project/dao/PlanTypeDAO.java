package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.PlanType;

public interface PlanTypeDAO {
    PlanType getPlanTypeByName(String name);
}
