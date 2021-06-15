package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.CompanyDAO;
import com.barchenko.project.entity.tables.Company;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import java.util.Optional;

import static java.util.Objects.isNull;

@Repository
public class CompanyDAOImpl implements CompanyDAO {

    private static final String GET_COMPANY_BY_QUOTE_ID = "SELECT * FROM company c \n" +
            " JOIN proposal p ON p.company_id = c.company_id\n" +
            " JOIN quote q ON q.quote_id = p.quote_id\n" +
            " JOIN organizationType o ON o.organizationType_id = c.organizationType_id \n" +
            " where q.quote_id = ?";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void saveOrUpdateCompany(Company company) {
        if (isNull(company)) {
            throw new IllegalArgumentException("company is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .saveOrUpdate(company);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Company> findCompanyByQuoteIdEM(long id) {
        Company company = null;
        EntityManager em = entityManagerFactory.createEntityManager();
        try {
            company = (Company) em.createNativeQuery(GET_COMPANY_BY_QUOTE_ID, Company.class)
                    .setParameter(1, id)
                    .getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(company);
    }

    @Override
    public Optional<Company> findCompanyByQuoteId(long quoteId) {
        Company company = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            company = session.createNativeQuery(GET_COMPANY_BY_QUOTE_ID, Company.class)
                    .setParameter(1, quoteId).getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(company);
    }

}
