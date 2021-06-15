package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.builder.DependentBuilder;
import com.barchenko.project.builder.EmployeeBuilder;
import com.barchenko.project.dao.DependentDAO;
import com.barchenko.project.dao.EmployeeDAO;
import com.barchenko.project.dao.GenderDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.RelationShipDAO;
import com.barchenko.project.dao.StatusDAO;
import com.barchenko.project.dao.transaction.TransactionEmployeeDependentDAO;
import com.barchenko.project.entity.dto.req.DependentDTORequest;
import com.barchenko.project.entity.dto.req.EmployeeDTORequest;
import com.barchenko.project.entity.tables.Dependent;
import com.barchenko.project.entity.tables.Employee;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.barchenko.project.entity.enums.StatusName.CREATED;
import static java.util.Objects.nonNull;

@Repository
@Transactional
public class TransactionEmployeeDependentDAOImpl implements TransactionEmployeeDependentDAO {

    @Autowired
    private SessionFactory sessionFactory;

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

    @Autowired
    private EmployeeBuilder employeeBuilder;

    @Autowired
    private DependentBuilder dependentBuilder;

    @Autowired
    private QuoteDAO quoteDAO;

    @Override
    public void saveEmployeeDependentDate(long quoteId, Employee employee, List<DependentDTORequest> dependentDTORequestList) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            employeeDAO.createEmployee(employee);
            if (nonNull(dependentDTORequestList)) {
                List<Dependent> dependents = dependentDTORequestList.stream()
                        .map(dependentDTORequest -> dependentBuilder.transformDependentDTORequestToDependent(
                                dependentDTORequest,
                                genderDAO.getGenderByName(dependentDTORequest.getGender().toUpperCase()),
                                relationShipDAO.getRelationShipByName(dependentDTORequest.getRelationship().toUpperCase()),
                                employee))
                        .collect(Collectors.toList());
                dependents.forEach(dependent -> dependentDAO.createDependent(dependent));
            }
            Optional<Quote> quoteOptional = quoteDAO.findQuoteById(quoteId);
            if (quoteOptional.isEmpty()) {
                throw new IllegalStateException("error");
            }
            Quote quote = quoteOptional.get();
            quote.getEmployees().add(employee);
            quoteDAO.updateQuote(quote);
            transaction.commit();
        }catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }

    @Override
    public void updateEmployeeDependentDate(EmployeeDTORequest employeeDTORequest) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Employee employee = employeeBuilder.transformEmployeeDTORequestToEmployee(
                    employeeDTORequest,
                    genderDAO.getGenderByName(employeeDTORequest.getGender().toUpperCase()),
                    statusDAO.getStatusByName(CREATED.name()));
            employeeDAO.updateEmployee(employee);
            if (nonNull(employeeDTORequest.getDependents())) {
                List<Dependent> dependents = employeeDTORequest.getDependents().stream()
                        .map(dependentDTORequest -> dependentBuilder.transformDependentDTORequestToDependent(
                                dependentDTORequest,
                                genderDAO.getGenderByName(dependentDTORequest.getGender().toUpperCase()),
                                relationShipDAO.getRelationShipByName(dependentDTORequest.getRelationship().toUpperCase()),
                                employee))
                        .collect(Collectors.toList());
                dependents.forEach(dependent -> dependentDAO.updateDependent(dependent));
            }
            transaction.commit();
        }catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }

    @Override
    public void deleteEmployeeDependentData(long employeeId) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Employee employee = employeeDAO.findEmployeeById(employeeId);
            employeeDAO.deleteEmployee(employee);
            transaction.commit();
        } catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }

}
