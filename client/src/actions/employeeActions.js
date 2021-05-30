import {
    CREATE_EMPLOYEE,
    EDIT_EMPLOYEE,
    GET_EMPLOYEES,
    GET_EMPLOYEE,
    DELETE_EMPLOYEE
} from "../utils/types";
import _ from 'lodash';
import history from "../utils/history";
import apis from "../utils/apis";
import {getCookie} from "../utils/util";
import {TOKEN} from "../utils/consts";

const getEmployeesToLocalStorage = (getState) => {
    const employees = getState().employeeReducer.employees.slice();
    localStorage.setItem("employees", JSON.stringify(employees))
}

let counter = 0;

export const createEmployee = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/employees/addEmployee', {...formProps, actionId: ++counter});
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: response.data
    });
    // getEmployeesToLocalStorage(getState)
    history.push('/employees');
}

export const editEmployee = (id, formProps) => async (dispatch, getState) => {
    const response = await apis.put(`/employees/${id}`, {...formProps, employeeId: id});
    console.log(response);
    dispatch({
        type: EDIT_EMPLOYEE,
        payload: response.data
    });
    // getEmployeesToLocalStorage(getState)
    history.push('/employees');
}

export const getEmployees = () => async (dispatch, getState) => {
    const response = await apis.get('/employees',
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
    })
    // getEmployeesToLocalStorage(getState);
}

export const getEmployee = (id) => async (dispatch) => {
    const response = await apis.get(`/employees/${id}`);
    console.log(response);
    dispatch({
        type: GET_EMPLOYEE,
        payload: response.data
    })
}

export const deleteEmployee = (id) => async (dispatch, getState) => {
    await apis.delete(`/employees/${id}`);
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
    })
    // getEmployeesToLocalStorage(getState)
    // history.push('/employees')
}