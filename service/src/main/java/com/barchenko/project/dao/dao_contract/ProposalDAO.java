package com.barchenko.project.dao.dao_contract;

import com.barchenko.project.entity.tables.Proposal;

import java.util.List;
import java.util.Optional;

public interface ProposalDAO {
    void saveProposal(Proposal proposal);
    void saveOrUpdateProposal(Proposal proposal);
    Optional<List<Proposal>> findProposalsByQuoteId(long quoteId);
    Proposal findProposalByXhref(String xhref);
    void updateProposal(Proposal proposal);
    void deleteProposal(Proposal proposal);
}
