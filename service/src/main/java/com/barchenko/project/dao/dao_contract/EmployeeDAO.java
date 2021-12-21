package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.dto.resp.EmployeeQuoteStatisticDTOResponse;
import com.barchenko.project.entity.tables.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeDAO {
    void createEmployee(Employee employee);
    Employee findEmployeeById(long id);
    List<Employee> getAllEmployeesByQuoteId(long quoteId);
    void updateEmployee(Employee employee);
    void deleteEmployee(Employee employee);

    Optional<List<EmployeeQuoteStatisticDTOResponse>> getEmployeeQuoteStatistic();
}
