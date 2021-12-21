package com.barchenko.project.service.service_impl;

import com.barchenko.project.builder.PlanBuilder;
import com.barchenko.project.dao.dao_contract.CompanyDAO;
import com.barchenko.project.dao.dao_contract.PlanDAO;
import com.barchenko.project.dao.dao_contract.ProposalDAO;
import com.barchenko.project.dao.dao_contract.QuoteDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionPlanDAO;
import com.barchenko.project.entity.dto.resp.PlanMetalTierStatisticDTOResponse;
import com.barchenko.project.entity.dto.resp.PlanResponseDTO;
import com.barchenko.project.entity.tables.Plan;
import com.barchenko.project.service.service_contract.PlanService;
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

    @Override
    public List<PlanMetalTierStatisticDTOResponse> getPlanMetalTierStatistic() {
        Optional<List<PlanMetalTierStatisticDTOResponse>> optionalPlanMetalTierStatisticDTOResponses = planDAO.getPlanMetalTierStatistic();
        if (optionalPlanMetalTierStatisticDTOResponses.isEmpty()) {
            throw new IllegalArgumentException("error");
        }
        return optionalPlanMetalTierStatisticDTOResponses.get();
    }
}
