package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Status;

public interface StatusDAO {
    Status getStatusByName(String name);
}
