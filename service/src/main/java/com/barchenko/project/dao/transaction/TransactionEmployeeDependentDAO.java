package com.barchenko.project.dao.transaction;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;

public interface TransactionEmployeeDependentDAO {
    void saveEmployeeDependentDate(EmployeeDTORequest employeeDTORequest);
    void updateEmployeeDependentDate(EmployeeDTORequest employeeDTORequest);
    void deleteEmployeeDependentData(long employeeId);
}
