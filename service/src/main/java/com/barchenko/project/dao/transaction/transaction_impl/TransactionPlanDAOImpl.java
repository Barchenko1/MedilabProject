package com.barchenko.project.dao.transaction.transaction_impl;

import com.barchenko.project.builder.ProposalBuilder;
import com.barchenko.project.dao.dao_contract.CompanyDAO;
import com.barchenko.project.dao.dao_contract.PlanDAO;
import com.barchenko.project.dao.dao_contract.ProposalDAO;
import com.barchenko.project.dao.dao_contract.QuoteDAO;
import com.barchenko.project.dao.transaction.transaction_contract.TransactionPlanDAO;
import com.barchenko.project.entity.tables.Company;
import com.barchenko.project.entity.tables.Plan;
import com.barchenko.project.entity.tables.Proposal;
import com.barchenko.project.entity.tables.Quote;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import static java.util.Objects.nonNull;

@Repository
@Transactional
public class TransactionPlanDAOImpl implements TransactionPlanDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private PlanDAO planDAO;

    @Autowired
    private QuoteDAO quoteDAO;

    @Autowired
    private ProposalDAO proposalDAO;

    @Autowired
    private CompanyDAO companyDAO;

    @Autowired
    private ProposalBuilder proposalBuilder;

    @Override
    public void addPlanToQuote(long quoteId, String planCode) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            Optional<Quote> optionalQuote = quoteDAO.findQuoteById(quoteId);
            Optional<Plan> optionalPlan = planDAO.getPlanByPlanCode(planCode);
            Optional<Company> optionalCompany = companyDAO.findCompanyByQuoteId(quoteId);
            Optional<List<Proposal>> optionalProposal = proposalDAO.findProposalsByQuoteId(quoteId);
            if (optionalPlan.isEmpty() || optionalCompany.isEmpty()) {
                throw new IllegalStateException("error");
            }
            //work!!
//            Proposal proposal = optionalProposal.get();
//            proposal.getPlans().add(optionalPlan.get());
//            proposalDAO.saveOrUpdateProposal(proposal);
            //

            Company company = optionalCompany.get();
            Proposal proposal = proposalBuilder.transformCompanyProfileDTORequestToProposal(company,
                    optionalProposal.get().get(0).getDiscount(),
                    new HashSet<>(optionalProposal.get().get(0).getProductLines()));
            proposal.setPlan(optionalPlan.get());
            Quote quote = optionalQuote.get();
            proposal.setQuote(quote);
            proposalDAO.saveProposal(proposal);
            quote.getProposals().add(proposal);

            quoteDAO.updateQuote(quote);

            transaction.commit();
        }catch (RuntimeException ex) {
            if (nonNull(transaction)) {
                transaction.rollback();
            }
        }
        session.close();
    }

}
