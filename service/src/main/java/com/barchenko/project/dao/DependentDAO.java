package com.barchenko.project.dao;

import com.barchenko.project.entity.dto.resp.DependentDTOResponse;
import com.barchenko.project.entity.tables.Dependent;

import java.util.List;

public interface DependentDAO {
    void createDependent(Dependent dependent);
    List<DependentDTOResponse> getAllDependents();
    void updateDependent(Dependent dependent);
    void deleteDependentById(long id);
}
