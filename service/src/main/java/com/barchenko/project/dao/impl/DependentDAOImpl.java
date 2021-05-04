package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.entity.dto.resp.DependentDTOResponse;
import com.barchenko.project.entity.tables.Dependent;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;

import static java.util.Objects.isNull;

@Repository
public class DependentDAOImpl implements DependentDAO {

    private static final String FIND_ALL_DEPENDENTS_DTO = "";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void createDependent(Dependent dependent) {
        if (isNull(dependent)) {
            throw new IllegalArgumentException("dependent is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(dependent);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<DependentDTOResponse> getAllDependents() {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<DependentDTOResponse> dependents = em
                .createNativeQuery(FIND_ALL_DEPENDENTS_DTO, DependentDTOResponse.class)
                .getResultList();
        if (dependents.isEmpty()) {
            return null;
        }
        return dependents;
    }

    @Override
    public void updateDependent(Dependent dependent) {
        if (isNull(dependent)) {
            throw new IllegalArgumentException("dependent is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .update(dependent);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteDependentById(long id) {

    }
}
