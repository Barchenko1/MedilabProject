import {
    FETCH_PLANS,
    FETCH_SELECTED_PLANS,
    FILTER_PLANS_BY_METAL_TYPES,
    GET_METAL_PLAN_STATISTIC,
    GET_QUOTE_STATISTIC,
    SORT_PLANS_BY_MONTH_COST
} from "../utils/types";

const INIT_STATE = {
    plans: [],
    currentProductLine: 'medical',
    sortItem: '',
    filteredPlans: [],
    allPlans: {},
    planStatistic: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === FETCH_PLANS) {
        console.log(action.payload)
        return {...state, plans: action.payload.plans, filteredPlans: action.payload.plans, currentProductLine: action.payload.productLine}
    }
    if (action.type === FETCH_SELECTED_PLANS) {
        return {...state, allPlans: action.payload}
    }

    if (action.type === FILTER_PLANS_BY_METAL_TYPES) {
        return {...state, plans: action.payload.plans, filteredPlans: action.payload.filteredPlans}
    }
    if (action.type === SORT_PLANS_BY_MONTH_COST) {
        return {...state, filteredPlans: action.payload.plans, sortItem: action.payload.sortItem}
    }

    if (action.type === GET_METAL_PLAN_STATISTIC) {
        return {...state, planStatistic : action.payload};
    }

    return state;
}