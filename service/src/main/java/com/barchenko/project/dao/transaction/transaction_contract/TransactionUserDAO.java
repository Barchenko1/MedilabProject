package com.barchenko.project.dao.transaction.transaction_contract;

import com.barchenko.project.entity.dto.req.UserDTORequest;

public interface TransactionUserDAO {
    void saveOrUpdateUserData(UserDTORequest userDTORequest);
    void deleteUserData(long id);
}
