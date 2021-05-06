package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Organization;

public interface OrganizationTypeDAO {
    Organization getOrganizationTypeByName(String name);
}
