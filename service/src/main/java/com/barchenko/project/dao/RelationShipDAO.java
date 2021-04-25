package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Relationship;

public interface RelationShipDAO {
    Relationship getRelationShipByName(String name);
}
