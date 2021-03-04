import apis from "../utils/apis";
import {ADD_PLAN, DELETE_PLAN, FETCH_PLANS, FETCH_SELECTED_PLANS, FILTER_PLANS_BY_METAL_TYPES} from "../utils/types";
import history from "../utils/history";

export const fetchPlans = (productLine) => async dispatch  => {
    const response = await apis.get('/plans');
    console.log(response);
    dispatch({
        type: FETCH_PLANS,
        payload: {
            plans: response.data[productLine],
            productLine: productLine
        }
    })
    localStorage.setItem('plans', JSON.stringify(response.data[productLine]));
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

export const universalFilter = (plans, filter) => async dispatch  => {
    console.log(plans);
    console.log(filter);
    let filterChain = plans;
    if (filter.metalTiers.filter(f => f.isChecked === true).length !== 0) {
        filterChain = filter.metalTiers.map(f => {
            return plans.filter(plan => plan[f.key] === f.value && f.isChecked === true);
        }).flat();
    }
    if (filter.planTypes.filter(f => f.isChecked === true).length !== 0) {
        filterChain = filter.planTypes.map(f => {
            return filterChain.filter(plan => plan[f.key] === f.value && f.isChecked === true);
        }).flat();
    }

    const  filteredPlans = [...filterChain]
    console.log(filteredPlans);

    dispatch({
        type: FILTER_PLANS_BY_METAL_TYPES,
        payload: {
            plans,
            filteredPlans
        }
    });
    // localStorage.setItem('filteredPlans', JSON.stringify(filteredPlans));
}