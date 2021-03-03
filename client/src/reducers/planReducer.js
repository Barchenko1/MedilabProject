import {
    FETCH_MEDICAL_PLANS, FETCH_SELECTED_PLANS, FILTER_BY_METAL_TYPE
} from "../utils/types";

const INIT_STATE = {
    plans: [],
    allPlans: {}
}

export default (state = INIT_STATE, action) => {
    if (action.type === FETCH_MEDICAL_PLANS) {
        return {...state, plans: action.payload}
    }
    if (action.type === FETCH_SELECTED_PLANS) {
        return {...state, allPlans: action.payload}
    }

    if (action.type === FILTER_BY_METAL_TYPE) {
        return {...state, plans: action.payload}
    }

    return state;
}