package com.barchenko.project.builder;

import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.dto.resp.DependentDTOResponse;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Gender;
import com.barchenko.project.entity.tables.Relationship;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class DependentBuilder {
    public Dependent transformDependentDTORequestToDependent(DependentDTORequest dependentDTORequest,
                                                             Gender gender,
                                                             Relationship relationship,
                                                             Employee employee) {
        Dependent dependent = new Dependent();
        dependent.setDependentId(dependentDTORequest.getDependentId());
        dependent.setFirstName(dependentDTORequest.getFirstName());
        dependent.setLastName(dependentDTORequest.getLastName());
        dependent.setBirthdate(dependentDTORequest.getBirthdate());
        dependent.setGender(gender);
        dependent.setRelationship(relationship);
        dependent.setEmployee(employee);
        return dependent;
    }

    public List<DependentDTOResponse> transformDependentListToDependentDTOResponseList(List<Dependent> dependents) {
        return dependents.stream()
                .map(this::transformDependentToDependentDTOResponse)
                .collect(Collectors.toList());
    }

    private DependentDTOResponse transformDependentToDependentDTOResponse(Dependent dependent) {
        DependentDTOResponse dependentDTOResponse = new DependentDTOResponse();
        dependentDTOResponse.setDependentId(dependent.getDependentId());
        dependentDTOResponse.setFirstName(dependent.getFirstName());
        dependentDTOResponse.setLastName(dependent.getLastName());
        dependentDTOResponse.setBirthdate(dependent.getBirthdate());
        dependentDTOResponse.setGender(dependent.getGender().getName().name().toLowerCase());
        dependentDTOResponse.setRelationship(dependent.getRelationship().getName().name().toLowerCase());
        return dependentDTOResponse;
    }
}
