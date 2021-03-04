import {
    FETCH_PLANS, FETCH_SELECTED_PLANS, FILTER_PLANS_BY_METAL_TYPES
} from "../utils/types";

const INIT_STATE = {
    plans: [],
    currentProductLine: 'medical',
    filteredPlans: [],
    allPlans: {}
}

export default (state = INIT_STATE, action) => {
    if (action.type === FETCH_PLANS) {
        return {...state, plans: action.payload.plans, filteredPlans: action.payload.plans, currentProductLine: action.payload.productLine}
    }
    if (action.type === FETCH_SELECTED_PLANS) {
        return {...state, allPlans: action.payload}
    }

    if (action.type === FILTER_PLANS_BY_METAL_TYPES) {
        return {...state, plans: action.payload.plans, filteredPlans: action.payload.filteredPlans}
    }

    return state;
}