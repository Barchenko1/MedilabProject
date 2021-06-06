import apis from "../utils/apis";
import {
    CREATE_QUOTE
} from "../utils/types";
import history from "../utils/history";
import {getCookie} from "../utils/util";
import {TOKEN} from "../utils/consts";


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
