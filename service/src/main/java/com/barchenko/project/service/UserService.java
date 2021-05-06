package com.barchenko.project.service;

import com.barchenko.project.entity.dto.Credential;
import com.barchenko.project.entity.dto.req.UserDTORequest;

public interface UserService {
    void addUserData(UserDTORequest userDTORequest);
    void loginUser(Credential credential);
    void updateUserData(UserDTORequest userDTORequest);
    void deleteUserData(long id);
}
