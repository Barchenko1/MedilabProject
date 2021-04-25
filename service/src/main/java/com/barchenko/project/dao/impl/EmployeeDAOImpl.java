package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.entity.dto.resp.EmployeeDTOResponse;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.hibernate.transform.Transformers;
import org.hibernate.type.LongType;
import org.hibernate.type.StringType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import java.util.List;

import static java.util.Objects.isNull;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

    private static final String FIND_ALL_EMPLOYEES_DTO = "SELECT e.employee_id, e.firstName, e.middleName, e.lastName, e.email, e.birthdate, e.dateOfHire, e.hoursOfWork, e.salary, g.name as gender, s.name as status\n" +
            "\tFROM employee e\n" +
            "    JOIN gender g ON g.gender_id=e.gender_id\n" +
            "    JOIN status s ON s.status_id=e.status_id;";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;


    @Override
    public void createEmployee(Employee employee) {
        if (isNull(employee)) {
            throw new IllegalArgumentException("employee is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(employee);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<EmployeeDTOResponse> getAllEmployees() {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<EmployeeDTOResponse> employees = em
                .createNativeQuery(FIND_ALL_EMPLOYEES_DTO, EmployeeDTOResponse.class)
                .getResultList();
        if (employees.isEmpty()) {
            return null;
        }
        return employees;
    }
}
