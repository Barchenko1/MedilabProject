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

export const createEmployee = (quoteId, formProps) => async (dispatch, getState) => {
    const response = await apis.post(`/${quoteId}/employees/addEmployee`, {...formProps, actionId: ++counter}, {
        headers: { authorization: getCookie(TOKEN) }
    });
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: response.data
    });
    history.push(`/${quoteId}/employees`);
}

export const editEmployee = (quoteId, formProps, id) => async (dispatch, getState) => {
    const response = await apis.put(`/${quoteId}/employees/${id}`, {...formProps, employeeId: id}, {
        headers: { authorization: getCookie(TOKEN) }
    });
    console.log(response);
    dispatch({
        type: EDIT_EMPLOYEE,
        payload: response.data
    });
    history.push(`/${quoteId}/employees`);
}

export const getEmployees = (quoteId) => async (dispatch, getState) => {
    console.log(getCookie(TOKEN));
    const response = await apis.get(`/${quoteId}/employees`,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
    });
    history.push(`/${quoteId}/employees`);
}

export const getEmployee = (id) => async (dispatch) => {
    const response = await apis.get(`/employees/${id}`,
        { headers: { authorization: getCookie(TOKEN) }
        });
    console.log(response);
    dispatch({
        type: GET_EMPLOYEE,
        payload: response.data
    })
}

export const deleteEmployee = (quoteId, id) => async (dispatch, getState) => {
    await apis.delete(`/${quoteId}/employees/${id}`,
        { headers: { authorization: getCookie(TOKEN) }
        });
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
    })
    // getEmployeesToLocalStorage(getState)
    // history.push('/employees')
}