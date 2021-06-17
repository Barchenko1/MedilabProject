import apis from "../utils/apis";
import {
    CREATE_QUOTE, FIND_QUOTE, GET_QUOTE_STATISTIC
} from "../utils/types";
import history from "../utils/history";
import {getCookie} from "../utils/util";
import {HOME_PAGE, TOKEN} from "../utils/consts";


export const createQuote = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/quote/init', formProps,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: CREATE_QUOTE,
        payload: response.data
    });
    history.push(`/${response.data.quoteId}/company-profile/`);
}

export const findQuote = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/quote/find', formProps,
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: FIND_QUOTE,
        payload: response.data
    });
    history.push(`/${response.data.quoteId}/company-profile/`);
}

export const getQuoteStatistic = () => async (dispatch, getState) => {
    const response = await apis.get('/quote/quoteStatistic',
        { headers: { authorization: getCookie(TOKEN) }}
    );
    console.log(response);
    dispatch({
        type: GET_QUOTE_STATISTIC,
        payload: response.data
    });
    history.push(HOME_PAGE);
}
