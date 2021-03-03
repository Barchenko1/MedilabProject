import apis from "../utils/apis";
import {ADD_PLAN, DELETE_EMPLOYEE, DELETE_PLAN, FETCH_MEDICAL_PLANS, FETCH_SELECTED_PLANS} from "../utils/types";
import history from "../utils/history";

export const fetchPlans = (productLine) => async dispatch  => {
    const response = await apis.get('/plans');
    console.log(response);
    dispatch({
        type: FETCH_MEDICAL_PLANS,
        payload: response.data[productLine]
    })
}

export const fetchSelectedPlans = () => async dispatch  => {
    const response = await apis.get('/plans');
    console.log(response);
    dispatch({
        type: FETCH_SELECTED_PLANS,
        payload: response.data
    })
}

export const addPlan = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/');
    dispatch({
        type: ADD_PLAN,
        payload: response.data
    });
}

export const deletePlan = (id) => async (dispatch, getState) => {
    await apis.delete(`/plans/${id}`);
    dispatch({
        type: DELETE_PLAN,
        payload: id
    });
}

export const filterMetalTypes = (plans) => async dispatch  => {
    console.log(plans);
    dispatch({
        type: FETCH_MEDICAL_PLANS,
        payload: plans
    })
}