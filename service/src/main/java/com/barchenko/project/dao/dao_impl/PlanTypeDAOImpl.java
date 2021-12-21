package com.barchenko.project.dao.dao_impl;

import com.barchenko.project.dao.dao_contract.PlanTypeDAO;
import com.barchenko.project.entity.tables.PlanType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class PlanTypeDAOImpl implements PlanTypeDAO {

    private static final String SELECT_TYPE_BY_NAME = "select * from type where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public PlanType getPlanTypeByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        PlanType planType = (PlanType) em.createNativeQuery(SELECT_TYPE_BY_NAME, PlanType.class)
                .setParameter(1, name)
                .getSingleResult();
        return planType;
    }
}
