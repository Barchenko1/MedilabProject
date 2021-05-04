package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Employee;

import java.util.List;

public interface EmployeeDAO {
    void createEmployee(Employee employee);
    Employee findEmployeeById(long id);
    List<Employee> getAllEmployees();
    void updateEmployee(Employee employee);
    void deleteEmployee(Employee employee);
}
