package com.barchenko.project.dao.transaction;

import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.entity.tables.Quote;

public interface TransactionCompanyProfileDAO {
    void saveOrUpdateCompanyProfileData(Quote quote, Proposal proposal, Address address);
}
