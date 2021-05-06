package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.entity.tables.Role;
import com.barchenko.project.entity.tables.Status;
import com.barchenko.project.entity.tables.User;
import org.springframework.stereotype.Component;

@Component
public class UserBuilder {

    public User transformUserDTORequestTOUser(UserDTORequest userDTORequest,
                                              Role role,
                                              Status status) {
        User user = new User();
        user.setUsername(userDTORequest.getUsername());
        user.setEmail(userDTORequest.getEmail());
        user.setPhone(userDTORequest.getPhone());
        user.setPassword(userDTORequest.getPassword());
        user.setRole(role);
        user.setStatus(status);
        return user;
    }
}
