package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.MetalTierDAO;
import com.barchenko.project.entity.tables.MetalTier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class MetalTierDAOImpl implements MetalTierDAO {

    private static final String SELECT_METAL_TIER_BY_NAME = "select * from metalTier where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public MetalTier getMetalTierByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        MetalTier metalTier = (MetalTier) em.createNativeQuery(SELECT_METAL_TIER_BY_NAME, MetalTier.class)
                .setParameter(1, name)
                .getSingleResult();
        return metalTier;
    }
}
