package com.barchenko.project.service.impl;

import com.barchenko.project.builder.PlanBuilder;
import com.barchenko.project.dao.CompanyDAO;
import com.barchenko.project.dao.PlanDAO;
import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionPlanDAO;
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
    private QuoteDAO quoteDAO;

    @Autowired
    private ProposalDAO proposalDAO;

    @Autowired
    private CompanyDAO companyDAO;

    @Autowired
    private TransactionPlanDAO transactionPlanDAO;

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
    public List<PlanResponseDTO> getPlansByQuoteId(long quoteId) {
        Optional<List<Plan>> optionalPlans = planDAO.getPlansByQuoteId(quoteId);
        List<PlanResponseDTO> planResponseDTOList = Collections.emptyList();
        if (optionalPlans.isPresent()) {
            planResponseDTOList = planBuilder.transformPlanListToPlanResponseDTOList(optionalPlans.get());
        }
        return planResponseDTOList;
    }

    @Override
    public void addPlanToQuote(long quoteId, String planCode) {
        transactionPlanDAO.addPlanToQuote(quoteId, planCode);
    }
}
