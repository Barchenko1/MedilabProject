package com.barchenko.project.dao.dao_contract;


import com.barchenko.project.entity.tables.PlanClass;

public interface PlanClassDAO {
    PlanClass getPlanClassByName(String name);
}
