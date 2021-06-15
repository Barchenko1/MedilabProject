package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;

import java.util.List;
import java.util.Optional;

import static java.util.Objects.isNull;

@Repository
public class QuoteDAOImpl implements QuoteDAO {

    private static final String GET_QUOTE_DATA_BY_USER = "SELECT * FROM quote q JOIN user u ON q.user_id=u.user_id where u.username = ? OR u.email = ?;";
    private static final String GET_QUOTE_DATA_BY_QUOTE_ID = "SELECT * FROM quote q where q.quote_id = ?;";
    private static final String GET_QUOTE_DATA_BY_QUOTE_NAME = "SELECT * FROM quote q where q.quoteName = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public Quote createQuote(Quote quote) {
        if (isNull(quote)) {
            throw new IllegalArgumentException("quote is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(quote);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return quote;
    }

    @Override
    public Optional<List<Quote>> findQuoteByUsernameOrEmail(String username, String email) {
        if (isNull(username)) {
            throw new IllegalArgumentException("username is null");
        }
        if (isNull(email)) {
            throw new IllegalArgumentException("email is null");
        }
        List<Quote> quoteList = null;
        try {
            EntityManager em = entityManagerFactory.createEntityManager();
            quoteList = (List<Quote>) em.createNativeQuery(GET_QUOTE_DATA_BY_USER, Quote.class)
                    .setParameter(1, username)
                    .setParameter(2, email)
                    .getResultList();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(quoteList);
    }

    @Override
    public Optional<Quote> findQuoteById(long id) {
        Quote quote = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            quote = session.createNativeQuery(GET_QUOTE_DATA_BY_QUOTE_ID, Quote.class)
                    .setParameter(1, id).getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(quote);
    }

    @Override
    public Optional<Quote> findQuoteByName(String name) {
        Quote quote = null;
//        Session session = sessionFactory.getCurrentSession();
        EntityManager em = entityManagerFactory.createEntityManager();
        try {
            quote = (Quote) em.createNativeQuery(GET_QUOTE_DATA_BY_QUOTE_NAME, Quote.class)
                    .setParameter(1, name).getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(quote);
    }

    @Override
    public Quote findQuoteByXhref(String xhref) {
        return null;
    }

    @Override
    public void updateQuote(Quote quote) {
        if (isNull(quote)) {
            throw new IllegalArgumentException("quote is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .update(quote);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteQuote(Quote proposal) {

    }
}
