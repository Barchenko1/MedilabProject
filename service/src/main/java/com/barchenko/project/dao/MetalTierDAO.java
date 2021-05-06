package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.MetalTier;

public interface MetalTierDAO {
    MetalTier getMetalTierByName(String name);
}
