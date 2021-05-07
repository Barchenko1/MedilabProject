package com.barchenko.project.dao.transaction;

import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.Proposal;

public interface TransactionCompanyProfileDAO {
    void saveOrUpdateCompanyProfileData(Proposal proposal, Address address);
}
