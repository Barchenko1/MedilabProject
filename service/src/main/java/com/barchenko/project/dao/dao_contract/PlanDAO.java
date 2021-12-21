package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.dto.resp.PlanMetalTierStatisticDTOResponse;
import com.barchenko.project.entity.tables.Plan;

import java.util.List;
import java.util.Optional;

public interface PlanDAO {
    Optional<Plan> getPlanByPlanCode(String planCode);
    Optional<List<Plan>> getPlansByProductLine(String productLine);
    Optional<List<Plan>> getPlansByQuoteId(long quoteId);

    Optional<List<PlanMetalTierStatisticDTOResponse>> getPlanMetalTierStatistic();
}
