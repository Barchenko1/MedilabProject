package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.ProposalDAO;
import com.barchenko.project.entity.tables.Proposal;
import org.springframework.stereotype.Repository;

@Repository
public class ProposalDAOImpl implements ProposalDAO {
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
