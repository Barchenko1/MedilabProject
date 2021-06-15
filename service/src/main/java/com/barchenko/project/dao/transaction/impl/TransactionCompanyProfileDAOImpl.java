package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.dao.AddressDAO;
import com.barchenko.project.dao.CompanyDAO;
import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.dao.QuoteDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.tables.Company;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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

    @Autowired
    private CompanyDAO companyDAO;

    @Override
    public void saveOrUpdateCompanyProfileData(long quoteId, Proposal proposal, Company company) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Optional<Quote> quoteOptional = quoteDAO.findQuoteById(quoteId);
            if (quoteOptional.isEmpty()) {
                throw new IllegalStateException("error");
            }
            Quote quote = quoteOptional.get();
            companyDAO.saveOrUpdateCompany(company);
            proposal.setQuote(quote);
            proposalDAO.saveOrUpdateProposal(proposal);
//            Optional<Quote> quoteOptional = quoteDAO.findQuoteById(quoteId);
//            if (quoteOptional.isEmpty()) {
//                throw new IllegalStateException("error");
//            }
//            Quote quote = quoteOptional.get();
//            quote.setProposal(proposal);
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
