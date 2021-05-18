import apis from "../utils/apis";
import {
    CREATE_QUOTE
} from "../utils/types";
import history from "../utils/history";


export const createQuote = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/', formProps);
    dispatch({
        type: CREATE_QUOTE,
        payload: response.data
    });
    history.push('/company-profile');
}
