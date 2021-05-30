package com.barchenko.project.dao;

import com.barchenko.project.entity.tables.Proposal;

public interface ProposalDAO {
    void createUpdateProposal(Proposal proposal);
    void createProposal(Proposal proposal);
    Proposal findProposalById(long id);
    Proposal findProposalByXhref(String xhref);
    void updateProposal(Proposal proposal);
    void deleteProposal(Proposal proposal);
}
