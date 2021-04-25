package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Status;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class StatusDAOImpl implements StatusDAO {

    private static final String SELECT_STATUS_BY_NAME = "select * from status where name = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Status getStatusByName(String name) {
        NativeQuery<Status> query = sessionFactory.getCurrentSession().createNativeQuery(SELECT_STATUS_BY_NAME);
        query.setParameter(1, name);
        Status status = query.addEntity(Status.class).getSingleResult();
        if (isNull(status)) {
            return null;
        }
        return status;
    }
}
