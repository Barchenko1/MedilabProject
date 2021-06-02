package com.barchenko.project.builder;

import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.entity.tables.User;
import org.springframework.stereotype.Component;

@Component
public class UserPrincipalBuilder {
    public User transformPrincipalToUser(UserPrincipal principal) {
        User user = new User();
        user.setUserId(principal.getId());
        user.setUsername(principal.getUsername());
        user.setPassword(principal.getPassword());
        user.setEmail(principal.getEmail());
        user.setPhone(principal.getPhone());
        user.setStatus(principal.getStatus());
        user.setRole(principal.getRole());
        return user;
    }
}
