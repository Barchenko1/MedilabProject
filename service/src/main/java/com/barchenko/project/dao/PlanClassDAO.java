package com.barchenko.project.dao;


import com.barchenko.project.entity.tables.PlanClass;

public interface PlanClassDAO {
    PlanClass getPlanClassByName(String name);
}
