package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Company;

public interface CompanyDAO {
    void saveOrUpdateCompany(Company company);
}
