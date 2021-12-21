package com.barchenko.project.service.service_impl;

import com.barchenko.project.builder.DependentBuilder;
import com.barchenko.project.builder.EmployeeBuilder;
import com.barchenko.project.dao.dao_contract.DependentDAO;
import com.barchenko.project.dao.dao_contract.EmployeeDAO;
import com.barchenko.project.dao.dao_contract.GenderDAO;
import com.barchenko.project.dao.dao_contract.RelationShipDAO;
import com.barchenko.project.dao.dao_contract.StatusDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionEmployeeDependentDAO;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.dto.resp.EmployeeQuoteStatisticDTOResponse;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.service.service_contract.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.barchenko.project.entity.enums.StatusName.CREATED;

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
    public void addEmployeeDependentData(long quoteId, EmployeeDTORequest employeeDTORequest) {
        Employee employee = employeeBuilder.transformEmployeeDTORequestToEmployee(
                employeeDTORequest,
                genderDAO.getGenderByName(employeeDTORequest.getGender().toUpperCase()),
                statusDAO.getStatusByName(CREATED.name()));
        transactionEmployeeDependentDAO.saveEmployeeDependentDate(quoteId, employee, employeeDTORequest.getDependents());
    }

    @Override
    public List<EmployeeDTOResponse> getEmployeesDependentsDataByQuoteId(long quoteId) {
        List<Employee> employeeList = employeeDAO.getAllEmployeesByQuoteId(quoteId);
        List<EmployeeDTOResponse> employeeDTOResponses = employeeList.stream()
                .map(employee -> employeeBuilder.transformEmployeeToEmployeeDTOResponse(employee,
                        dependentBuilder.transformDependentListToDependentDTOResponseList(employee.getDependents())))
                .collect(Collectors.toList());
        return employeeDTOResponses;
    }

    @Override
    public void updateEmployeeDependentData(long quoteId, EmployeeDTORequest employeeDTORequest) {
        transactionEmployeeDependentDAO.updateEmployeeDependentDate(employeeDTORequest);
    }

    @Override
    public void deleteEmployeeDependentData(long quoteId, long id) {
        transactionEmployeeDependentDAO.deleteEmployeeDependentData(id);
    }

    @Override
    public List<EmployeeQuoteStatisticDTOResponse> getEmployeeQuoteStatistic() {
        Optional<List<EmployeeQuoteStatisticDTOResponse>> optionalEmployeeQuoteStatisticDTOResponses = employeeDAO.getEmployeeQuoteStatistic();
        if (optionalEmployeeQuoteStatisticDTOResponses.isEmpty()) {
            throw new IllegalArgumentException("error");
        }
        return optionalEmployeeQuoteStatisticDTOResponses.get();
    }
}
