package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.RelationShipDAO;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Relationship;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class RelationShipDAOImpl implements RelationShipDAO {
    private static final String SELECT_RELATION_SHIP_BY_NAME = "select * from relationship where name = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Relationship getRelationShipByName(String name) {
        NativeQuery<Relationship> query = sessionFactory.getCurrentSession().createNativeQuery(SELECT_RELATION_SHIP_BY_NAME);
        query.setParameter(1, name);
        Relationship relationship = query.addEntity(Relationship.class).getSingleResult();
        if (isNull(relationship)) {
            return null;
        }
        return relationship;
    }
}
