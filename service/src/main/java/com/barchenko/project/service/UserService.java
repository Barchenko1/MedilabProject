package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.LoginPasswordDTORequest;
import com.barchenko.project.entity.dto.req.UserDTORequest;

public interface UserService {
    void saveOrUpdateUser(UserDTORequest userDTORequest);
    void loginUser(LoginPasswordDTORequest loginPasswordDTORequest);
    void deleteUserData(long id);
}
