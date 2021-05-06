package com.barchenko.project.service.impl;

import com.barchenko.project.builder.UserBuilder;
import com.barchenko.project.dao.RoleDAO;
import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.dao.UserDAO;
import com.barchenko.project.dao.transaction.TransactionUserDAO;
import com.barchenko.project.entity.dto.Credential;
import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private RoleDAO roleDAO;

    @Autowired
    private StatusDAO statusDAO;

    @Autowired
    private UserBuilder userBuilder;

    @Autowired
    private TransactionUserDAO transactionUserDAO;

    @Override
    public void addUserData(UserDTORequest userDTORequest) {
        transactionUserDAO.saveUserData(userDTORequest);
    }

    @Override
    public void loginUser(Credential credential) {

    }

    @Override
    public void updateUserData(UserDTORequest userDTORequest) {

    }

    @Override
    public void deleteUserData(long id) {

    }
}
