package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Role;

public interface RoleDAO {
    Role getRoleByName(String name);
}
