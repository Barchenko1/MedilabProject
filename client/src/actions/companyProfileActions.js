import {SAVE_UPDATE_COMPANY_PROFILE} from "../utils/types";
import history from "../utils/history";
import apis from "../utils/apis";

export const saveUpdateCompanyProfile = (formProps) => async (dispatch, getState) => {
    const response = await apis.post('/company-profile/addCompanyData', {...formProps});
    console.log(response);
    dispatch({
        type: SAVE_UPDATE_COMPANY_PROFILE,
        payload: response.data
    });
    // getEmployeesToLocalStorage(getState)
}