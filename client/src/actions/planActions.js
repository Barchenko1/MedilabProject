import apis from "../utils/apis";
import {
    ADD_PLAN,
    DELETE_PLAN,
    FETCH_PLANS,
    FETCH_SELECTED_PLANS,
    FILTER_PLANS_BY_METAL_TYPES, GET_METAL_PLAN_STATISTIC, GET_QUOTE_STATISTIC,
    SORT_PLANS_BY_MONTH_COST
} from "../utils/types";
import history from "../utils/history";
import {filterChain, getCookie, sortPlansByTotalMonthlyCost} from "../utils/util";
import {TOKEN} from "../utils/consts";

export const fetchPlans = (quoteId, productLine) => async dispatch  => {
    const response = await apis.get(`${quoteId}/plans?productLine=${productLine}`, {
        headers: { authorization: getCookie(TOKEN) }
    });
    console.log(response);
    console.log(productLine)
    dispatch({
        type: FETCH_PLANS,
        payload: {
            plans: response.data,
            productLine: productLine
        }
    });
    history.push(`/${quoteId}/plan-selection`);
    localStorage.setItem('plans', JSON.stringify(response.data));
    localStorage.setItem('filteredPlans', JSON.stringify(response.data));
}

export const getPlanMetalTierStatistic = () => async (dispatch, getState) => {
    const response = await apis.get('/planStatistic',
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_METAL_PLAN_STATISTIC,
        payload: response.data
    });
}

export const fetchSelectedPlans = () => async dispatch  => {
    const response = await apis.get('/plans');
    console.log(response);
    dispatch({
        type: FETCH_SELECTED_PLANS,
        payload: response.data
    })

}

export const addPlan = (quoteId, planCode) => async (dispatch, getState) => {
    console.log(quoteId);
    console.log(planCode);
    const response = await apis.get(`${quoteId}/plan?planCode=${planCode}`, {
        headers: { authorization: getCookie(TOKEN) }
    });
    dispatch({
        type: ADD_PLAN,
        payload: response.data
    });
    history.push(`/${quoteId}/plan-selection`);
}

export const deletePlan = (id) => async (dispatch, getState) => {
    await apis.delete(`/plans/${id}`);
    dispatch({
        type: DELETE_PLAN,
        payload: id
    });
}

export const plansFilter = (plans, filter) => async dispatch  => {
    const filteredPlans = filterChain(plans, filter);
    dispatch({
        type: FILTER_PLANS_BY_METAL_TYPES,
        payload: {
            plans,
            filteredPlans
        }
    });
    localStorage.setItem('filteredPlans', JSON.stringify(filteredPlans));
}

export const sortPlans = (plans, sortItem) => async dispatch => {
    const sortedPlans = sortPlansByTotalMonthlyCost(plans, sortItem);
    dispatch({
        type: SORT_PLANS_BY_MONTH_COST,
        payload: {
            plans,
            sortedPlans
        }
    });
    localStorage.setItem('sortItem', JSON.stringify(sortItem));
}