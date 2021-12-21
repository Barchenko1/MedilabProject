package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.resp.PlanMetalTierStatisticDTOResponse;
import com.barchenko.project.entity.dto.resp.PlanResponseDTO;
import com.barchenko.project.service.service_contract.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class PlanController {

    @Autowired
    private PlanService planService;

    @RequestMapping(value= "/{quoteId}/plans", method = RequestMethod.GET)
    public List<PlanResponseDTO> getPlans(@PathVariable long quoteId, @RequestParam(required = false) String productLine) {
        List<PlanResponseDTO> plans = planService.getPlans(productLine);
        return plans;
    }

    @RequestMapping(value= "/{quoteId}/quotePlans", method = RequestMethod.GET)
    public List<PlanResponseDTO> getPlans(@PathVariable long quoteId) {
        List<PlanResponseDTO> plans = planService.getPlansByQuoteId(quoteId);
        return plans;
    }

    @RequestMapping(value= "/{quoteId}/plan", method = RequestMethod.GET)
    public ResponseEntity<?>  addPlan(@PathVariable long quoteId, @RequestParam String planCode) {
        planService.addPlanToQuote(quoteId, planCode);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value= "/planStatistic", method = RequestMethod.GET)
    public ResponseEntity<List<PlanMetalTierStatisticDTOResponse>>  getPlanMetalTierStatistic() {
        List<PlanMetalTierStatisticDTOResponse> planMetalTierStatisticDTOResponses = planService.getPlanMetalTierStatistic();
        return ResponseEntity.ok(planMetalTierStatisticDTOResponses);
    }


}
