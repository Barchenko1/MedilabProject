package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.PlanType;

public interface PlanTypeDAO {
    PlanType getPlanTypeByName(String name);
}
