package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Company;

import java.util.Optional;

public interface CompanyDAO {
    void saveOrUpdateCompany(Company company);
    Optional<Company> findCompanyByQuoteIdEM(long id);
    Optional<Company> findCompanyByQuoteId(long quoteId);
}
