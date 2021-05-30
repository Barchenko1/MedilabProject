package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.builder.UserBuilder;
import com.barchenko.project.dao.RoleDAO;
import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.dao.UserDAO;
import com.barchenko.project.dao.transaction.TransactionUserDAO;
import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.entity.enums.StatusName;
import com.barchenko.project.entity.tables.Role;
import com.barchenko.project.entity.tables.Status;
import com.barchenko.project.entity.tables.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import static java.util.Objects.nonNull;

@Repository
@Transactional
public class TransactionUserDAOImpl implements TransactionUserDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private RoleDAO roleDAO;

    @Autowired
    private StatusDAO statusDAO;

    @Autowired
    private UserBuilder userBuilder;

    @Override
    public void saveOrUpdateUserData(UserDTORequest userDTORequest) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Role role = roleDAO.getRoleByName(userDTORequest.getRole().toUpperCase());
            Status status = statusDAO.getStatusByName(StatusName.PENDING.name());
            User user = userBuilder.transformUserDTORequestTOUser(userDTORequest, role, status);
            userDAO.createUpdateUser(user);
            transaction.commit();
        }catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
//        if (nonNull(transaction)) {
//            transaction.commit();
//        }
        session.close();
    }

    @Override
    public void deleteUserData(long id) {

    }
}
