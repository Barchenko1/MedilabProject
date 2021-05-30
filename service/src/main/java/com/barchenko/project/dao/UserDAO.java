package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.User;

import java.util.Optional;

public interface UserDAO {
    void createUpdateUser(User user);
    void deleteUser(User user);
    Optional<User> findByUsernameOrEmail(String usernameOrEmail);
}
