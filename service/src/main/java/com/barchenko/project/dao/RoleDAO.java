package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Role;

public interface RoleDAO {
    Role getRoleByName(String name);
}
