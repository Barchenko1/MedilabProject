package com.barchenko.project.service.impl;

import com.barchenko.project.builder.DependentBuilder;
import com.barchenko.project.builder.EmployeeBuilder;
import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.dao.RelationShipDAO;
import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Relationship;
import com.barchenko.project.entity.tables.Status;
import com.barchenko.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.barchenko.project.entity.enums.StatusName.CREATED;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeDAO employeeDAO;

    @Autowired
    private DependentDAO dependentDAO;

    @Autowired
    private GenderDAO genderDAO;

    @Autowired
    private StatusDAO statusDAO;

    @Autowired
    private RelationShipDAO relationShipDAO;

    @Override
    public void addEmployeeData(EmployeeDTORequest employeeDTO) {
        List<DependentDTORequest> dependentDTORequests = employeeDTO.getDependents();
        Gender gender = getGenderTable(employeeDTO.getGender().toUpperCase());
        Status status = statusDAO.getStatusByName(CREATED.name());
        Employee employee = new EmployeeBuilder().createEmployee(employeeDTO, gender, status);
        employeeDAO.createEmployee(employee);
        if (employeeDTO.getDependents() != null) {
            DependentBuilder dependentBuilder = new DependentBuilder();
            List<Dependent> dependents = dependentDTORequests.stream()
                    .map(dependentDTORequest -> dependentBuilder.createDependent(
                            dependentDTORequest,
                            getGenderTable(dependentDTORequest.getGender().toUpperCase()),
                            getRelationShip(dependentDTORequest.getRelationship().toUpperCase()),
                            employee))
                    .collect(Collectors.toList());
            dependents.forEach(dependent -> dependentDAO.createDependent(dependent));
        }
    }

    @Override
    public List<EmployeeDTOResponse> getAllEmployees() {
        return employeeDAO.getAllEmployees();
    }

    private Gender getGenderTable(String name) {
        return genderDAO.getGenderByName(name);
    }

    private Relationship getRelationShip(String name) {
        return relationShipDAO.getRelationShipByName(name);
    }
}
