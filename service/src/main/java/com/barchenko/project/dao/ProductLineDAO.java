package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.ProductLine;

public interface ProductLineDAO {
    ProductLine getProductLineByName(String name);
}
