package com.barchenko.project.service;

import com.barchenko.project.entity.dto.resp.PlanResponseDTO;

import java.util.List;

public interface PlanService {
    List<PlanResponseDTO> getPlans(String productLine);
    List<PlanResponseDTO> getPlansByQuoteId();
}
