package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.resp.PlanResponseDTO;
import com.barchenko.project.entity.tables.Plan;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PlanBuilder {

    public List<PlanResponseDTO> transformPlanListToPlanResponseDTOList(List<Plan> planList) {
        List<PlanResponseDTO> planResponseDTOList = new ArrayList<>();
        planList.forEach(el -> planResponseDTOList.add(transformPlanToPlanResponseDTO(el)));
        return  planResponseDTOList;
    }


    private PlanResponseDTO transformPlanToPlanResponseDTO(Plan plan) {
        PlanResponseDTO planResponseDTO = new PlanResponseDTO();
        planResponseDTO.setPlanId(plan.getPlanId());
        planResponseDTO.setPlanName(plan.getPlanName());
        planResponseDTO.setPlanCode(plan.getPlanCode());
        planResponseDTO.setTotalMonthlyCost(plan.getMonthCost());
        planResponseDTO.setDeductible(plan.getDeductible());
        planResponseDTO.setPlanClass(plan.getPlanClass().getName().name());
        planResponseDTO.setMetalTier(plan.getMetalTier().getName().name());
        planResponseDTO.setPlanType(plan.getPlanType().getName().name());
        return planResponseDTO;
    }
}
