package com.barchenko.project.dao.transaction.transaction_impl;

import com.barchenko.project.dao.dao_contract.QuoteDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionQuoteDAO;
import com.barchenko.project.entity.tables.Quote;
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
    public Quote createQuote(Quote quote) {
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
        return quote;
    }
}
