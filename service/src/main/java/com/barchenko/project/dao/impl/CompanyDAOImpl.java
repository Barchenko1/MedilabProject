package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.CompanyDAO;
import com.barchenko.project.entity.tables.Company;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class CompanyDAOImpl implements CompanyDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveOrUpdateCompany(Company company) {
        if (isNull(company)) {
            throw new IllegalArgumentException("company is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .saveOrUpdate(company);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
