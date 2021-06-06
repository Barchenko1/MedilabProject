package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;

import java.util.List;

public interface EmployeeService {
    void addEmployeeDependentData(long quoteId, EmployeeDTORequest employeeDTO);
    List<EmployeeDTOResponse> getEmployeesDependentsDataByQuoteId(long quoteId);
    void updateEmployeeDependentData(long quoteId, EmployeeDTORequest employeeDTORequest);
    void deleteEmployeeDependentData(long quoteId, long id);

}
