package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.dto.resp.EmployeeQuoteStatisticDTOResponse;
import com.barchenko.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value = "/{quoteId}/employees/addEmployee", method = RequestMethod.POST)
    public ResponseEntity<?> addEmployeeData(@PathVariable long quoteId, @Valid @RequestBody EmployeeDTORequest employeeDTO) {
        employeeService.addEmployeeDependentData(quoteId, employeeDTO);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value= "/{quoteId}/employees", method = RequestMethod.GET)
    public List<EmployeeDTOResponse> getEmployeesData(@PathVariable long quoteId) {
        List<EmployeeDTOResponse> employeeDTOResponses = employeeService.getEmployeesDependentsDataByQuoteId(quoteId);
        return employeeDTOResponses;
    }

    @RequestMapping(value = "/{quoteId}/employees/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateEmployeeDate(@PathVariable long quoteId, @RequestBody EmployeeDTORequest employeeDTORequest) {
        employeeService.updateEmployeeDependentData(quoteId, employeeDTORequest);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value = "/{quoteId}/employees/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteEmployeeData(@PathVariable long quoteId, @PathVariable long id) {
        employeeService.deleteEmployeeDependentData(quoteId, id);
        return ResponseEntity.ok("Successfull");
    }

    @RequestMapping(value= "/employeeStatistic", method = RequestMethod.GET)
    public ResponseEntity<List<EmployeeQuoteStatisticDTOResponse>>  getPlanMetalTierStatistic() {
        List<EmployeeQuoteStatisticDTOResponse> employeeQuoteStatisticDTOResponseList = employeeService.getEmployeeQuoteStatistic();
        return ResponseEntity.ok(employeeQuoteStatisticDTOResponseList);
    }

}
