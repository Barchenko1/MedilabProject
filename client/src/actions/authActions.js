import {REGISTRATION, SIGN_IN, SIGN_OUT} from "../utils/types";
import apis from "../utils/apis";
import {LOGIN_PAGE, TOKEN} from "../utils/consts";
import history from "../utils/history";
import {createBasicAuthToken, logout, registerSuccessfulLogin} from "../utils/apiService";

export const signIn = (formProps) => async dispatch => {
    const response = await apis.post('/auth/signin', formProps,
        { headers: { authorization: createBasicAuthToken(formProps.usernameOrEmail, formProps.password) }}
    );
    let token = 'Basic ' + window.btoa(response.data.principal.username + ":" + formProps.password);
    document.cookie = `${TOKEN}=${token}`;
    console.log(response);
    dispatch ({
        type: SIGN_IN,
        payload: response.data
    })
    // registerSuccessfulLogin(formProps, response.data.principal);
    history.push("/");
};

export const signOut = () => async dispatch => {
    await apis.get("/auth/signout");
    dispatch ({
        type: SIGN_OUT
    })
    logout();
    history.push(LOGIN_PAGE);
}

export const registration = (formProps) => async dispatch => {
    const response = await apis.post('/auth/signup', formProps);
    dispatch ({
        type: REGISTRATION,
        payload: response.data
    })
    if (response.data.success === true) {
        history.push(LOGIN_PAGE);
    }
}
