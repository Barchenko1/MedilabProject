package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.entity.tables.Gender;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class GenderDAOImpl implements GenderDAO {

    private static final String SELECT_GENDER_BY_NAME = "select * from gender where name = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Gender getGenderByName(String name) {
        NativeQuery<Gender> query = sessionFactory.getCurrentSession().createNativeQuery(SELECT_GENDER_BY_NAME);
        query.setParameter(1, name);
        Gender gender = query.addEntity(Gender.class).getSingleResult();
        if (isNull(gender)) {
            return null;
        }
        return gender;
    }
}
