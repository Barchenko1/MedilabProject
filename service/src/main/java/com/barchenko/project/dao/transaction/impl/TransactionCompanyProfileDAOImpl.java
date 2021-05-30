package com.barchenko.project.dao.transaction.impl;

import com.barchenko.project.dao.AddressDAO;
import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.dao.transaction.TransactionCompanyProfileDAO;
import com.barchenko.project.entity.tables.Address;
import com.barchenko.project.entity.tables.Proposal;
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
    private ProposalDAO proposalDAO;

    @Autowired
    private AddressDAO addressDAO;

    @Override
    public void saveOrUpdateCompanyProfileData(Proposal proposal, Address address) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            proposalDAO.createUpdateProposal(proposal);
            session.flush();
            session.clear();
        } catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }
}
