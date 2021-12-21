package com.barchenko.project.dao.dao_impl;

import com.barchenko.project.dao.dao_contract.UserDAO;
import com.barchenko.project.entity.tables.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import java.util.Optional;

import static java.util.Objects.isNull;

@Repository
public class UserDAOImpl implements UserDAO {

    private static final String GET_USER_DATA = "SELECT * FROM user where user.username = ? OR user.email = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void createUpdateUser(User user) {
        if (isNull(user)) {
            throw new IllegalArgumentException("user is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .saveOrUpdate(user);
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

    @Override
    public Optional<User> findByUsernameOrEmail(String usernameOrEmail) {
        if (isNull(usernameOrEmail)) {
            throw new IllegalArgumentException("usernameOrEmail is null");
        }
        User user = null;
        try {
            EntityManager em = entityManagerFactory.createEntityManager();
            user = (User) em.createNativeQuery(GET_USER_DATA, User.class)
                    .setParameter(1, usernameOrEmail)
                    .setParameter(2, usernameOrEmail)
                    .getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(user);
    }
}
