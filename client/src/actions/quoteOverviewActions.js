import apis from "../utils/apis";
import {
    FETCH_PLANS, GET_COMPANY, GET_EMPLOYEES, GET_QUOTE_PLANS,
} from "../utils/types";
import history from "../utils/history";
import {TOKEN} from "../utils/consts";
import {getCookie} from "../utils/util";

export const getEmployeesOverview = (quoteId) => async (dispatch, getState) => {
    const response = await apis.get(`/${quoteId}/employees`,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
    });
    history.push(`/${quoteId}/quote-overview`);
}

export const getCompanyOverview = (quoteId) => async (dispatch, getState) => {
    const response = await apis.get(`company-profile/${quoteId}/getCompany`,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_COMPANY,
        payload: response.data
    });
    history.push(`/${quoteId}/quote-overview`);
}

export const getPlanOverview = (quoteId) => async (dispatch, getState) => {
    const response = await apis.get(`/${quoteId}/quotePlans`,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_QUOTE_PLANS,
        payload: response.data
    });
    history.push(`/${quoteId}/quote-overview`);
}