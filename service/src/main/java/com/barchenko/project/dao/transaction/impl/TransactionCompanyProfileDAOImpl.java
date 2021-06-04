package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.dao.AddressDAO;
import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.Proposal;
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
public class TransactionCompanyProfileDAOImpl implements TransactionCompanyProfileDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private QuoteDAO quoteDAO;

    @Autowired
    private ProposalDAO proposalDAO;

    @Autowired
    private AddressDAO addressDAO;

    @Override
    public void saveOrUpdateCompanyProfileData(Quote quote, Proposal proposal, Address address) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            addressDAO.saveOrUpdateAddress(address);
            proposalDAO.saveOrUpdateProposal(proposal);
            quoteDAO.updateQuote(quote);
            transaction.commit();
        } catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }
}
