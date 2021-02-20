import {REGISTRATION, SIGN_IN, SIGN_OUT} from "../utils/types";
import apis from "../utils/apis";
import {LOGIN_PAGE} from "../utils/consts";
import history from "../utils/history";
import {createBasicAuthToken, logout, registerSuccessfulLogin} from "../utils/apiService";

export const signIn = (formProps) => async dispatch => {
    const response = await apis.post('/api/auth/signin', formProps,
        { headers: { authorization: createBasicAuthToken(formProps.usernameOrEmail, formProps.password) }}
    )
    dispatch ({
        type: SIGN_IN,
        payload: response.data
    })
    console.log(response.data)
    registerSuccessfulLogin(formProps, response.data.principal);
    history.push();
};

export const signOut = () => async dispatch => {
    await apis.get("/api/auth/signout");
    dispatch ({
        type: SIGN_OUT
    })
    logout();
    history.push(LOGIN_PAGE);
}

export const registration = (formProps) => async dispatch => {
    const form = {...formProps, role:"USER"}
    const response = await apis.post('/api/auth/signup', form);
    dispatch ({
        type: REGISTRATION,
        payload: response.data
    })
    if (response.data.success === true) {
        history.push(LOGIN_PAGE);
    }
}
