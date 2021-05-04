package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.dto.resp.DependentDTOResponse;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Status;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployeeBuilder {
    public Employee transformEmployeeDTORequestToEmployee(EmployeeDTORequest employeeDTO, Gender gender, Status status) {
        Employee employee = new Employee();
        employee.setEmployeeId(employeeDTO.getEmployeeId());
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setMiddleName(employeeDTO.getMiddleName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setBirthdate(employeeDTO.getBirthdate());
        employee.setDateOfHire(employeeDTO.getDateOfHire());
        employee.setHoursOfWork(employeeDTO.getHoursOfWork());
        employee.setSalary(employeeDTO.getSalary());
        employee.setGender(gender);
        employee.setStatus(status);
        return employee;
    }

    public EmployeeDTOResponse transformEmployeeToEmployeeDTOResponse(Employee employee, List<DependentDTOResponse> dependents) {
        EmployeeDTOResponse employeeDTOResponse = new EmployeeDTOResponse();
        employeeDTOResponse.setEmployeeId(employee.getEmployeeId());
        employeeDTOResponse.setFirstName(employee.getFirstName());
        employeeDTOResponse.setMiddleName(employee.getMiddleName());
        employeeDTOResponse.setLastName(employee.getLastName());
        employeeDTOResponse.setEmail(employee.getEmail());
        employeeDTOResponse.setBirthdate(employee.getBirthdate());
        employeeDTOResponse.setDateOfHire(employee.getDateOfHire());
        employeeDTOResponse.setSalary(employee.getSalary());
        employeeDTOResponse.setGender(employee.getGender().getName().name().toLowerCase());
        employeeDTOResponse.setStatus(employee.getStatus().getName().name().toLowerCase());
        employeeDTOResponse.setDependents(dependents);
        return employeeDTOResponse;
    }
}
