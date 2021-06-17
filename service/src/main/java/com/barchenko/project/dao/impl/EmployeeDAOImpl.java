package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.entity.dto.resp.EmployeeQuoteStatisticDTOResponse;
import com.barchenko.project.entity.tables.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import java.util.List;
import java.util.Optional;

import static java.util.Objects.isNull;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

    private static final String GET_ALL_EMPLOYEES_DATA = "SELECT * FROM employee e\n" +
            "JOIN gender g ON g.gender_id=e.gender_id\n" +
            "JOIN status s ON s.status_id=e.status_id\n" +
            "JOIN quote_employee q ON q.employee_id=e.employee_id\n" +
            "where q.quote_id = ?;";

    private static final String GET_EMPLOYEE_QUOTE_STATISTIC = "SELECT q.dateOfCreate, COUNT(e.firstName) as employeeCount\n" +
            "\tFROM quote_employee qe\n" +
            "\tJOIN quote q ON q.quote_id=qe.quote_id\n" +
            "    JOIN employee e ON e.employee_id=qe.employee_id\n" +
            "    GROUP BY q.dateOfCreate;";

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

    @Override
    @Transactional
    public Optional<List<EmployeeQuoteStatisticDTOResponse>> getEmployeeQuoteStatistic() {
        List<EmployeeQuoteStatisticDTOResponse> employeeQuoteStatisticDTOResponseList = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            employeeQuoteStatisticDTOResponseList = session.createNativeQuery(GET_EMPLOYEE_QUOTE_STATISTIC)
                    .setResultTransformer(Transformers.aliasToBean(EmployeeQuoteStatisticDTOResponse.class))
                    .getResultList();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(employeeQuoteStatisticDTOResponseList);
    }
}
