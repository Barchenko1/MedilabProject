package com.barchenko.project.dao.transaction.transaction_contract;

import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;

import java.util.List;

public interface TransactionEmployeeDependentDAO {
    void saveEmployeeDependentDate(long quoteId, Employee employee, List<DependentDTORequest> dependentDTORequestList);
//    void saveEmployeeDependentDate(Employee employee, List<Dependent> dependents);
    void updateEmployeeDependentDate(EmployeeDTORequest employeeDTORequest);
    void deleteEmployeeDependentData(long employeeId);
}
