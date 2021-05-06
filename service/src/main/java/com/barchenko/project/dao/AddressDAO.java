package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Address;

public interface AddressDAO {
    void saveOrUpdateAddress(Address address);
    void updateAddress(Address address);
    void deleteAddress(Address address);
}
