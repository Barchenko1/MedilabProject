package com.barchenko.project.dao.transaction.transaction_contract;

import com.barchenko.project.entity.tables.Company;
import com.barchenko.project.entity.tables.Proposal;

public interface TransactionCompanyProfileDAO {
    void saveOrUpdateCompanyProfileData(long quote, Proposal proposal, Company company);
}
