package com.barchenko.project.dao;

import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Employee;

import java.util.List;

public interface EmployeeDAO {
    void createEmployee(Employee employee);
    List<EmployeeDTOResponse> getAllEmployees();

}
