package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Relationship;

public interface RelationShipDAO {
    Relationship getRelationShipByName(String name);
}
