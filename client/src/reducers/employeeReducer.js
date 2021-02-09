import {
    CREATE_EMPLOYEE,
    EDIT_EMPLOYEE,
    GET_EMPLOYEES,
    GET_EMPLOYEE,
    DELETE_EMPLOYEE
} from "../utils/types";

const INIT_STATE = {
    employees: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === CREATE_EMPLOYEE) {
        const newState = {...state, employees: [...state.employees, action.payload]}
        return newState
    }
    if (action.type === EDIT_EMPLOYEE) {
        return {...state, employees: state.employees.map(employee => employee.id === action.payload.id ? action.payload : employee)}
    }
    if (action.type === GET_EMPLOYEES) {
        return {...state, employees: action.payload}
    }
    if (action.type === GET_EMPLOYEE) {
        return {...state, [action.payload.id]: action.payload}
    }
    if (action.type === DELETE_EMPLOYEE) {
        const newState = {...state, employees: state.employees.filter(employee => employee.id !== action.payload)};
        return newState

    }

    return state;
}