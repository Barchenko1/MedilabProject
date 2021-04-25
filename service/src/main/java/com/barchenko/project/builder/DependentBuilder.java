package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Relationship;

public class DependentBuilder {
    public Dependent createDependent(DependentDTORequest dependentDTORequest, Gender gender, Relationship relationship, Employee employee) {
        Dependent dependent = new Dependent();
        dependent.setFirstName(dependentDTORequest.getFirstName());
        dependent.setLastName(dependentDTORequest.getLastName());
        dependent.setBirthdate(dependentDTORequest.getBirthdate());
        dependent.setGender(gender);
        dependent.setRelationship(relationship);
        dependent.setEmployee(employee);
        return dependent;
    }
}
