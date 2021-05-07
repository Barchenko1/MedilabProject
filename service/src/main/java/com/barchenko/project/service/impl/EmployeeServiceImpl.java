package com.barchenko.project.service.impl;

import com.barchenko.project.builder.DependentBuilder;
import com.barchenko.project.builder.EmployeeBuilder;
import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.dao.RelationShipDAO;
import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.dao.transaction.TransactionEmployeeDependentDAO;
import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.barchenko.project.entity.enums.StatusName.CREATED;
import static java.util.Objects.nonNull;

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

    @Autowired
    private StatusDAO statusDAO;

    @Override
    public void addEmployeeDependentData(EmployeeDTORequest employeeDTORequest) {
//        List<DependentDTORequest> dependentDTORequests = employeeDTORequest.getDependents();
//        Employee employee = employeeBuilder.transformEmployeeDTORequestToEmployee(
//                employeeDTORequest,
//                genderDAO.getGenderByName(employeeDTORequest.getGender().toUpperCase()),
//                statusDAO.getStatusByName(CREATED.name()));
//        List<Dependent> dependents = new ArrayList<>();
//        if (nonNull(employeeDTORequest.getDependents())) {
//            dependents = dependentDTORequests.stream()
//                    .map(dependentDTORequest -> dependentBuilder.transformDependentDTORequestToDependent(
//                            dependentDTORequest,
//                            genderDAO.getGenderByName(dependentDTORequest.getGender().toUpperCase()),
//                            relationShipDAO.getRelationShipByName(dependentDTORequest.getRelationship().toUpperCase()),
//                            employee))
//                    .collect(Collectors.toList());
//        }
        Employee employee = employeeBuilder.transformEmployeeDTORequestToEmployee(
                employeeDTORequest,
                genderDAO.getGenderByName(employeeDTORequest.getGender().toUpperCase()),
                statusDAO.getStatusByName(CREATED.name()));
        transactionEmployeeDependentDAO.saveEmployeeDependentDate(employee, employeeDTORequest.getDependents());
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
