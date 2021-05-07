package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.OrganizationTypeDAO;
import com.barchenko.project.entity.tables.OrganizationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class OrganizationTypeDAOImpl implements OrganizationTypeDAO {

    private static final String SELECT_ORGANIZATION_BY_NAME = "select * from organizationType where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public OrganizationType getOrganizationTypeByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        OrganizationType organizationType = (OrganizationType) em.createNativeQuery(SELECT_ORGANIZATION_BY_NAME, OrganizationType.class)
                .setParameter(1, name)
                .getSingleResult();
        return organizationType;
    }
}
