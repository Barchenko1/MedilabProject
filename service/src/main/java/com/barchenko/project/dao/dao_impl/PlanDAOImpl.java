package com.barchenko.project.dao.dao_impl;

import com.barchenko.project.dao.dao_contract.PlanDAO;
import com.barchenko.project.entity.dto.resp.PlanMetalTierStatisticDTOResponse;
import com.barchenko.project.entity.tables.Plan;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import java.util.List;
import java.util.Optional;

@Repository
public class PlanDAOImpl implements PlanDAO {

    private static final String GET_ALL_PLANS_BY_PRODUCT_LINE = "SELECT * FROM plan p\n" +
            " JOIN class c ON c.class_id=p.class_id\n" +
            "  JOIN metalTier m ON m.metalTier_id=p.metalTier_id\n" +
            "  JOIN type t ON t.type_id=p.type_id\n" +
            "  where c.name = ?;";

    private static final String GET_ALL_PLAN_BY_PLAN_CODE = "SELECT * FROM plan p\n" +
            " JOIN class c ON c.class_id=p.class_id\n" +
            " JOIN metalTier m ON m.metalTier_id=p.metalTier_id\n" +
            " JOIN type t ON t.type_id=p.type_id\n" +
            " where p.code = ?;";

    private static final String GET_PLANS_BY_QUOTE_ID = "SELECT * FROM plan p\n" +
            " JOIN proposal pro ON pro.plan_id = p.plan_id\n" +
            " JOIN quote q ON q.quote_id = pro.quote_id\n" +
            " where q.quote_id = ?";

    private static final String GET_PLAN_METAL_TIER_STATISTIC = "SELECT m.name as metalTier, count(p.name) as planCount\n" +
            " FROM plan p\n" +
            " JOIN metalTier m ON m.metalTier_id=p.metalTier_id\n" +
            " GROUP BY m.name;";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public Optional<Plan> getPlanByPlanCode(String planCode) {
        Plan plan = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            plan = session.createNativeQuery(GET_ALL_PLAN_BY_PLAN_CODE, Plan.class)
                    .setParameter(1, planCode).getSingleResult();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(plan);
    }

    @Override
    public Optional<List<Plan>> getPlansByProductLine(String productLine) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Plan> employeeList = em.createNativeQuery(GET_ALL_PLANS_BY_PRODUCT_LINE, Plan.class)
                .setParameter(1, productLine.toUpperCase())
                .getResultList();
        return Optional.of(employeeList);
    }

    @Override
    public Optional<List<Plan>> getPlansByQuoteId(long quoteId) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Plan> employeeList = em.createNativeQuery(GET_PLANS_BY_QUOTE_ID, Plan.class)
                .setParameter(1, quoteId)
                .getResultList();
        return Optional.of(employeeList);
    }

    @Override
    @Transactional
    public Optional<List<PlanMetalTierStatisticDTOResponse>> getPlanMetalTierStatistic() {
        List<PlanMetalTierStatisticDTOResponse> planMetalTierStatisticDTOResponseList = null;
        Session session = sessionFactory.getCurrentSession();
        try {
            planMetalTierStatisticDTOResponseList = session.createNativeQuery(GET_PLAN_METAL_TIER_STATISTIC)
                    .setResultTransformer(Transformers.aliasToBean(PlanMetalTierStatisticDTOResponse.class))
                    .getResultList();
        }
        catch (NoResultException e) {
            return Optional.empty();
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Optional.of(planMetalTierStatisticDTOResponseList);
    }
}
