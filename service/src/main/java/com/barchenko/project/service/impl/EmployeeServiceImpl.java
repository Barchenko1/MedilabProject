package com.barchenko.project.service.impl;

import com.barchenko.project.builder.DependentBuilder;
import com.barchenko.project.builder.EmployeeBuilder;
import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.dao.RelationShipDAO;
import com.barchenko.project.dao.TransactionEmployeeDependentDAO;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.DependentDTOResponse;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeDAO employeeDAO;

    @Autowired
    private DependentDAO dependentDAO;

    @Autowired
    private TransactionEmployeeDependentDAO transactionEmployeeDependentDAO;

    @Autowired
    private GenderDAO genderDAO;

    @Autowired
    private RelationShipDAO relationShipDAO;

    @Autowired
    private EmployeeBuilder employeeBuilder;

    @Autowired
    private DependentBuilder dependentBuilder;

    @Override
    public void addEmployeeDependentData(EmployeeDTORequest employeeDTORequest) {
        transactionEmployeeDependentDAO.saveEmployeeDependentDate(employeeDTORequest);
    }

    @Override
    public List<EmployeeDTOResponse> getEmployeesDependentsData() {
        List<Employee> employeeList = employeeDAO.getAllEmployees();
        List<EmployeeDTOResponse> employeeDTOResponses = employeeList.stream()
                .map(employee -> employeeBuilder.transformEmployeeToEmployeeDTOResponse(employee,
                        dependentBuilder.transformDependentListToDependentDTOResponseList(employee.getDependents())))
                .collect(Collectors.toList());
        return employeeDTOResponses;
    }

    @Override
    public void updateEmployeeDependentData(EmployeeDTORequest employeeDTORequest) {
        transactionEmployeeDependentDAO.updateEmployeeDependentDate(employeeDTORequest);
    }

    @Override
    public void deleteEmployeeDependentData(long id) {
        transactionEmployeeDependentDAO.deleteEmployeeDependentData(id);
    }
}
