import {
    GET_COMPANY,
    GET_EMPLOYEES,
    GET_QUOTE_PLANS,
} from "../utils/types";

const INIT_STATE = {
    employees: [],
    company: null,
    plans: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === GET_EMPLOYEES) {
        return {...state, employees: action.payload}
    }
    if (action.type === GET_COMPANY) {
        return {...state, company: action.payload}
    }
    if (action.type === GET_QUOTE_PLANS) {
        return {...state, plans: action.payload}
    }
    return state;
}