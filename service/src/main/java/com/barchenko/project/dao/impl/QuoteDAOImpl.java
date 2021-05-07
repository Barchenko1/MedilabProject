package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManagerFactory;

import static java.util.Objects.isNull;

@Repository
public class QuoteDAOImpl implements QuoteDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void createQuote(Quote quote) {
        if (isNull(quote)) {
            throw new IllegalArgumentException("quote is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(quote);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Quote findQuoteByName(String name) {
        return null;
    }

    @Override
    public Quote findQuoteByXhref(String xhref) {
        return null;
    }

    @Override
    public void updateQuote(Quote proposal) {

    }

    @Override
    public void deleteQuote(Quote proposal) {

    }
}
