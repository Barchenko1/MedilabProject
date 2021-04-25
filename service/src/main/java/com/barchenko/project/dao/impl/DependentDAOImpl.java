package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.entity.tables.Dependent;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static java.util.Objects.isNull;

@Repository
public class DependentDAOImpl implements DependentDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void createDependent(Dependent dependent) {
        if (isNull(dependent)) {
            throw new IllegalArgumentException("employee is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(dependent);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Dependent> getAllDependents() {
        return null;
    }
}
