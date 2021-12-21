package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.ProductLine;

public interface ProductLineDAO {
    ProductLine getProductLineByName(String name);
}
