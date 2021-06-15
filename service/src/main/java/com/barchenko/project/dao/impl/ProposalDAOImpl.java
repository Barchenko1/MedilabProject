package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.entity.tables.Proposal;
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
public class ProposalDAOImpl implements ProposalDAO {

    private static final String GET_PROPOSAL_BY_QUOTE_ID = "SELECT * FROM proposal p \n" +
            " JOIN quote q ON q.quote_id = p.quote_id\n" +
            " where q.quote_id = ?";

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveProposal(Proposal proposal) {
        if (isNull(proposal)) {
            throw new IllegalArgumentException("proposal is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .save(proposal);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void saveOrUpdateProposal(Proposal proposal) {
        if (isNull(proposal)) {
            throw new IllegalArgumentException("proposal is null");
        }
        try {
            sessionFactory.getCurrentSession()
                    .saveOrUpdate(proposal);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<List<Proposal>> findProposalsByQuoteId(long quoteId) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Proposal> proposals = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            proposals = session.createNativeQuery(GET_PROPOSAL_BY_QUOTE_ID, Proposal.class)
                    .setParameter(1, quoteId)
                    .getResultList();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(proposals);
    }

    @Override
    public Proposal findProposalByXhref(String xhref) {
        return null;
    }

    @Override
    public void updateProposal(Proposal proposal) {

    }

    @Override
    public void deleteProposal(Proposal proposal) {

    }
}
