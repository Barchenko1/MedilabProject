package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value = "/addEmployee", method = RequestMethod.POST)
    public ResponseEntity<?> addEmployeeData(@Valid @RequestBody EmployeeDTORequest employeeDTO) {
        employeeService.addEmployeeDependentData(employeeDTO);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<EmployeeDTOResponse> getEmployeesData() {
        List<EmployeeDTOResponse> employeeDTOResponses = employeeService.getEmployeesDependentsData();
        return employeeDTOResponses;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateEmployeeDate(@RequestBody EmployeeDTORequest employeeDTORequest) {
        employeeService.updateEmployeeDependentData(employeeDTORequest);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteEmployeeData(@PathVariable long id) {
        employeeService.deleteEmployeeDependentData(id);
        return ResponseEntity.ok("Successfull");
    }


}
