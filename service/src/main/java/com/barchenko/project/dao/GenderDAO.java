package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Gender;

public interface GenderDAO {
    Gender getGenderByName(String name);
}
