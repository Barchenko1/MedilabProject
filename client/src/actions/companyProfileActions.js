import {SAVE_UPDATE_COMPANY_PROFILE} from "../utils/types";
import history from "../utils/history";
import apis from "../utils/apis";
import {getCookie} from "../utils/util";
import {TOKEN} from "../utils/consts";

export const saveUpdateCompanyProfile = (formProps, quoteId) => async (dispatch, getState) => {
    console.log(formProps);
    console.log(quoteId);
    const response = await apis.post(`/company-profile/${quoteId}/addCompanyData`, {...formProps}, {
        headers: { authorization: getCookie(TOKEN) }
    });
    console.log(response);
    dispatch({
        type: SAVE_UPDATE_COMPANY_PROFILE,
        payload: response.data
    });
    history.push('/employees');
}