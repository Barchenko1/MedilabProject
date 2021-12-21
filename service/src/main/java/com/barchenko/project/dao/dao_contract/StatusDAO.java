package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Status;

public interface StatusDAO {
    Status getStatusByName(String name);
}
