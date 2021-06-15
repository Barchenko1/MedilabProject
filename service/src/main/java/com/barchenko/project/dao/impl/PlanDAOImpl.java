package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.PlanDAO;
import com.barchenko.project.entity.tables.Plan;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import java.util.List;
import java.util.Optional;

@Repository
public class PlanDAOImpl implements PlanDAO {

    private static final String GET_ALL_PLANS_BY_PRODUCT_LINE = "SELECT * FROM plan p\n" +
            " JOIN class c ON c.class_id=p.plan_id\n" +
            " JOIN metalTier m ON m.metalTier_id=p.plan_id\n" +
            " JOIN type t ON t.type_id=p.plan_id\n" +
            " where c.name = ?;";

    private static final String GET_ALL_PLAN_BY_PLAN_CODE = "SELECT * FROM plan p\n" +
            " JOIN class c ON c.class_id=p.plan_id\n" +
            " JOIN metalTier m ON m.metalTier_id=p.plan_id\n" +
            " JOIN type t ON t.type_id=p.plan_id\n" +
            " where p.code = ?;";

    private static final String GET_PLANS_BY_QUOTE_ID = "SELECT * FROM plan p\n" +
            " JOIN proposal pro ON pro.plan_id = p.plan_id\n" +
            " JOIN quote q ON q.quote_id = pro.quote_id\n" +
            " where q.quote_id = ?";

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
                .setParameter(1, productLine.toLowerCase())
                .getResultList();
        return Optional.of(employeeList);
//        List<Plan> planList = null;
//        Session session = sessionFactory.getCurrentSession();
//        try {
//            planList = session.createNativeQuery(GET_ALL_PLANS, Plan.class).getResultList();
//        }
//        catch (NoResultException e) {
//            return Optional.empty();
//        }
//        catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//        return Optional.of(planList);
    }

    @Override
    public Optional<List<Plan>> getPlansByQuoteId(long quoteId) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Plan> employeeList = em.createNativeQuery(GET_PLANS_BY_QUOTE_ID, Plan.class)
                .setParameter(1, quoteId)
                .getResultList();
        return Optional.of(employeeList);
    }
}
