package com.barchenko.project.service.service_impl;

import com.barchenko.project.builder.UserBuilder;
import com.barchenko.project.dao.dao_contract.RoleDAO;
import com.barchenko.project.dao.dao_contract.StatusDAO;
import com.barchenko.project.dao.dao_contract.UserDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionUserDAO;
import com.barchenko.project.entity.dto.req.LoginPasswordDTORequest;
import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.service.service_contract.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Override
    public void saveOrUpdateUser(UserDTORequest userDTORequest) {
        if (findUserByUserNameOrEmailChecker(userDTORequest)) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.
            throw new IllegalStateException("email already taken");
        }
        String encodedPassword = bCryptPasswordEncoder
                .encode(userDTORequest.getPassword());
        userDTORequest.setPassword(encodedPassword);
        transactionUserDAO.saveOrUpdateUserData(userDTORequest);
    }

    @Override
    public void loginUser(LoginPasswordDTORequest loginPasswordDTORequest) {

    }

    @Override
    public void deleteUserData(long id) {

    }

    private boolean findUserByUserNameOrEmailChecker(UserDTORequest userDTORequest) {
        boolean isUserNameExists = userDAO
                .findByUsernameOrEmail(userDTORequest.getUsername())
                .isPresent();
        boolean isEmailExists = userDAO
                .findByUsernameOrEmail(userDTORequest.getEmail())
                .isPresent();
        return isUserNameExists && isEmailExists;
    }
}
