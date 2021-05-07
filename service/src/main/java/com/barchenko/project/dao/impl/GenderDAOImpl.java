package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.entity.tables.Gender;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import static java.util.Objects.isNull;

@Repository
public class GenderDAOImpl implements GenderDAO {

    private static final String SELECT_GENDER_BY_NAME = "select * from gender where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public Gender getGenderByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        Gender gender = (Gender) em.createNativeQuery(SELECT_GENDER_BY_NAME, Gender.class)
                .setParameter(1, name)
                .getSingleResult();
        return gender;
    }
}
