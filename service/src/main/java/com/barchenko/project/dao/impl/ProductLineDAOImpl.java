package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.ProductLineDAO;
import com.barchenko.project.entity.tables.ProductLine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Repository
public class ProductLineDAOImpl implements ProductLineDAO {

    private static final String SELECT_PRODUCT_LINE_BY_NAME = "select * from productLine where name = ?;";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public ProductLine getProductLineByName(String name) {
        EntityManager em = entityManagerFactory.createEntityManager();
        ProductLine productLine = (ProductLine) em.createNativeQuery(SELECT_PRODUCT_LINE_BY_NAME, ProductLine.class)
                .setParameter(1, name)
                .getSingleResult();
        return productLine;
    }
}
