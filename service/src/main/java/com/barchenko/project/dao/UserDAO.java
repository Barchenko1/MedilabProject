package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.User;

public interface UserDAO {
    void createQuote(User user);
    User findUserByLoginOrEmail(String loginEmail);
    void updateUser(User user);
    void deleteUser(User user);
}
