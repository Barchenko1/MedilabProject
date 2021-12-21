package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.MetalTier;

public interface MetalTierDAO {
    MetalTier getMetalTierByName(String name);
}
