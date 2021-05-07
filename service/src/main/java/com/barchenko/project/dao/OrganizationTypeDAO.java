package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.OrganizationType;

public interface OrganizationTypeDAO {
    OrganizationType getOrganizationTypeByName(String name);
}
