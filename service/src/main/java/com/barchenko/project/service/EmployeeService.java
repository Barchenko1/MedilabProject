package com.barchenko.project.service;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;

import java.util.List;

public interface EmployeeService {
    void addEmployeeData(EmployeeDTORequest employeeDTO);
    List<EmployeeDTOResponse> getAllEmployees();
}
