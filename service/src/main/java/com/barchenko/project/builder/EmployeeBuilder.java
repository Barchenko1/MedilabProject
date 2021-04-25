package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Status;

public class EmployeeBuilder {
    public Employee createEmployee(EmployeeDTORequest employeeDTO, Gender gender, Status status) {
        Employee employee = new Employee();
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
}
