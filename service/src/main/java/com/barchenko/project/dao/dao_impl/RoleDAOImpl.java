package com.barchenko.project.dao.dao_impl;

import com.barchenko.project.dao.dao_contract.RoleDAO;
import com.barchenko.project.entity.tables.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class RoleDAOImpl implements RoleDAO {

    private static final String SELECT_ROLE_BY_NAME_ROLE = "select * from role where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public Role getRoleByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        Role role = (Role) em.createNativeQuery(SELECT_ROLE_BY_NAME_ROLE, Role.class)
                .setParameter(1, name)
                .getSingleResult();
        return role;
    }
}
