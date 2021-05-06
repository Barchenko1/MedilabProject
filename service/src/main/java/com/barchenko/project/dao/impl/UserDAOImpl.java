package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.UserDAO;
import com.barchenko.project.entity.tables.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class UserDAOImpl implements UserDAO {

    private static final String GET_ALL_USER_DATA = "SELECT *\n" +
            "\tFROM user u\n" +
            "    JOIN role r ON r.role_id=u.role_id\n" +
            "    JOIN status s ON s.status_id=u.status_id\n " +
            "    where u.login or u.email = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void createQuote(User user) {
        if (isNull(user)) {
            throw new IllegalArgumentException("user is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public User findUserByLoginOrEmail(String loginEmail) {
        return null;
    }

    @Override
    public void updateUser(User user) {
        if (isNull(user)) {
            throw new IllegalArgumentException("user is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .update(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteUser(User user) {
        if (isNull(user)) {
            throw new IllegalArgumentException("user is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .remove(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
