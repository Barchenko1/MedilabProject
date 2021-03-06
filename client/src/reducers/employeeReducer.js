import {
    CREATE_EMPLOYEE,
    EDIT_EMPLOYEE,
    GET_EMPLOYEES,
    GET_EMPLOYEE,
    DELETE_EMPLOYEE, GET_METAL_PLAN_STATISTIC, GET_EMPLOYEE_STATISTIC
} from "../utils/types";

const INIT_STATE = {
    employees: [],
    employeesStatistic: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === CREATE_EMPLOYEE) {
        const newState = {...state, employees: [...state.employees, action.payload]}
        return newState
    }
    if (action.type === EDIT_EMPLOYEE) {
        console.log(action);
        console.log(state);
        return {...state, employees: state.employees.map(employee => employee.employeeId === action.payload.id ? action.payload : employee)}
    }
    if (action.type === GET_EMPLOYEES) {
        return {...state, employees: action.payload}
    }
    if (action.type === GET_EMPLOYEE) {
        return {...state, [action.payload.id]: action.payload}
    }
    if (action.type === DELETE_EMPLOYEE) {
        const newState = {...state, employees: state.employees.filter(employee => employee.employeeId !== action.payload)};
        return newState
    }
    if (action.type === GET_EMPLOYEE_STATISTIC) {
        return {...state, employeesStatistic : action.payload};
    }

    return state;
}