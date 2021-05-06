package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.AddressDAO;
import com.barchenko.project.entity.tables.Address;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class AddressDAOImpl implements AddressDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveOrUpdateAddress(Address address) {
        if (isNull(address)) {
            throw new IllegalArgumentException("address is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .saveOrUpdate(address);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void updateAddress(Address address) {

    }

    @Override
    public void deleteAddress(Address address) {

    }
}
