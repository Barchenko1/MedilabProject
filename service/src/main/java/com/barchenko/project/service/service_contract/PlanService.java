package com.barchenko.project.service.service_contract;

import com.barchenko.project.entity.dto.resp.PlanMetalTierStatisticDTOResponse;
import com.barchenko.project.entity.dto.resp.PlanResponseDTO;

import java.util.List;

public interface PlanService {
    List<PlanResponseDTO> getPlans(String productLine);
    List<PlanResponseDTO> getPlansByQuoteId(long quoteId);
    void addPlanToQuote(long quoteId, String planCode);

    List<PlanMetalTierStatisticDTOResponse> getPlanMetalTierStatistic();
}
