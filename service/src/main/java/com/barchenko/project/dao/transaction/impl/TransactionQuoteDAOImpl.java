package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionQuoteDAO;
import com.barchenko.project.entity.enums.StatusName;
import com.barchenko.project.entity.tables.Quote;
import com.barchenko.project.entity.tables.Role;
import com.barchenko.project.entity.tables.Status;
import com.barchenko.project.entity.tables.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import static java.util.Objects.nonNull;

@Repository
@Transactional
public class TransactionQuoteDAOImpl implements TransactionQuoteDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private QuoteDAO quoteDAO;

    @Override
    public void createQuote(Quote quote) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            quoteDAO.createQuote(quote);
            transaction.commit();
        }catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }
}
