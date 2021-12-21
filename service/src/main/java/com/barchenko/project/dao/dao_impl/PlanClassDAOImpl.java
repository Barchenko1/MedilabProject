package com.barchenko.project.dao.dao_impl;

import com.barchenko.project.dao.dao_contract.PlanClassDAO;
import com.barchenko.project.entity.tables.PlanClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class PlanClassDAOImpl implements PlanClassDAO {

    private static final String SELECT_PLAN_CLASS_BY_NAME = "select * from class where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public PlanClass getPlanClassByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        PlanClass planClass = (PlanClass) em.createNativeQuery(SELECT_PLAN_CLASS_BY_NAME, PlanClass.class)
                .setParameter(1, name)
                .getSingleResult();
        return planClass;
    }

}
