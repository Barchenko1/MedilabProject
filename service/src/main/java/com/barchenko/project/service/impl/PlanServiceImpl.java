package com.barchenko.project.service.impl;

import com.barchenko.project.builder.PlanBuilder;
import com.barchenko.project.dao.PlanDAO;
import com.barchenko.project.entity.dto.resp.PlanResponseDTO;
import com.barchenko.project.entity.tables.Plan;
import com.barchenko.project.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanDAO planDAO;

    @Autowired
    private PlanBuilder planBuilder;

    @Override
    public List<PlanResponseDTO> getPlans(String productLine) {
        Optional<List<Plan>> optionalPlans = planDAO.getPlansByProductLine(productLine);
        List<PlanResponseDTO> planResponseDTOList = Collections.emptyList();
        if (optionalPlans.isPresent()) {
            planResponseDTOList = planBuilder.transformPlanListToPlanResponseDTOList(optionalPlans.get());
        }
        return planResponseDTOList;
    }

    @Override
    public List<PlanResponseDTO> getPlansByQuoteId() {
        return null;
    }
}
