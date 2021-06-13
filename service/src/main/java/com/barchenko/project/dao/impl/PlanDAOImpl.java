package com.barchenko.project.dao.impl;

import com.barchenko.project.dao.PlanDAO;
import com.barchenko.project.entity.tables.Plan;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;
import java.util.Optional;

@Repository
public class PlanDAOImpl implements PlanDAO {

    private static final String GET_ALL_PLANS = "SELECT * FROM plan p\n" +
            " JOIN class c ON c.class_id=p.plan_id\n" +
            " JOIN metalTier m ON m.metalTier_id=p.plan_id\n" +
            " JOIN type t ON t.type_id=p.plan_id\n" +
            " where c.name = ?;";

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public Optional<Plan> getPlanByPlanCode(String planCode) {
        return null;
    }

    @Override
    public Optional<List<Plan>> getPlansByProductLine(String productLine) {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Plan> employeeList = em.createNativeQuery(GET_ALL_PLANS, Plan.class)
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
}
