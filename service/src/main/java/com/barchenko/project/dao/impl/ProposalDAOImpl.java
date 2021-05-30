package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.entity.tables.Proposal;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static java.util.Objects.isNull;

@Repository
public class ProposalDAOImpl implements ProposalDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void createUpdateProposal(Proposal proposal) {
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
    public void createProposal(Proposal proposal) {

    }

    @Override
    public Proposal findProposalById(long id) {
        return null;
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
