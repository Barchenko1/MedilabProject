package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.entity.tables.Employee;
import org.hibernate.SessionFactory;
import org.hibernate.annotations.QueryHints;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;

import static java.util.Objects.isNull;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

    private static final String FIND_ALL_EMPLOYEES_DTO = "SELECT e.employee_id, e.firstName, e.middleName, e.lastName, e.email, e.birthdate, e.dateOfHire, e.hoursOfWork, e.salary, g.name as gender, s.name as status\n" +
            "\tFROM employee e\n" +
            "    JOIN gender g ON g.gender_id=e.gender_id\n" +
            "    JOIN status s ON s.status_id=e.status_id\n;";

    private static final String GET_ALL_EMPLOYEES = "SELECT * FROM employee";
    private static final String GET_ALL_DEPENDENTS = "SELECT * FROM dependent";
    private static final String GET_ALL_EMPLOYEES_DATA = "SELECT * FROM employee e\n" +
            "JOIN gender g ON g.gender_id=e.gender_id\n" +
            "JOIN status s ON s.status_id=e.status_id\n" +
            "JOIN quote_employee q ON q.employee_id=e.employee_id\n" +
            "where q.quote_id = ?;";
    private static final String GET_EMPLOYEE_BY_ID = "SELECT * FROM employee where employee_id=?";

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
    public Employee findEmployeeById(long id) {
        Employee employee;
        try {
            employee = sessionFactory.getCurrentSession()
                    .get(Employee.class, id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        if (isNull(employee)) {
            throw new IllegalArgumentException("employee is null");
        }
        return employee;
    }

    @Override
    public List<Employee> getAllEmployeesByQuoteId(long quoteId) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Employee> employeeList = em.createNativeQuery(GET_ALL_EMPLOYEES_DATA, Employee.class)
                .setParameter(1, quoteId)
                .getResultList();
        return employeeList;
    }

    @Override
    public void updateEmployee(Employee employee) {
        if (isNull(employee)) {
            throw new IllegalArgumentException("employee is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .update(employee);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteEmployee(Employee employee) {
        if (isNull(employee)) {
            throw new IllegalArgumentException("employee is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .remove(employee);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
