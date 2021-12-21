package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Gender;

public interface GenderDAO {
    Gender getGenderByName(String name);
}
