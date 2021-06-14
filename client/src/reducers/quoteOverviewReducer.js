import {
    GET_COMPANY,
    GET_EMPLOYEES,
} from "../utils/types";

const INIT_STATE = {
    employees: [],
    company: null
}

export default (state = INIT_STATE, action) => {
    if (action.type === GET_EMPLOYEES) {
        return {...state, employees: action.payload}
    }
    if (action.type === GET_COMPANY) {
        return {...state, company: action.payload}
    }
    return state;
}