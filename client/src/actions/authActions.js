import {PROFILE, REGISTRATION, SIGN_IN, SIGN_OUT} from "../utils/types";
import apis from "../utils/apis";
import {LOGIN_PAGE, TOKEN} from "../utils/consts";
import history from "../utils/history";
import {getCookie} from "../utils/util";

export const signIn = (formProps) => async dispatch => {
    const response = await apis.post('/auth/signin', formProps);
    console.log(response)
    let token = 'Basic ' + window.btoa(formProps.usernameOrEmail + ":" + formProps.password);
    document.cookie = `${TOKEN}=${token}`;
    dispatch ({
        type: SIGN_IN,
        payload: response.data
    })
    history.push("/");
};

export const getProfile = () => async dispatch => {
    const response = await apis.get('/auth/profile', {
        headers: { authorization: getCookie(TOKEN) }
    });
    dispatch ({
        type: PROFILE,
        payload: response.data
    })
}

export const signOut = () => async dispatch => {
    await apis.get("/auth/signout");
    document.cookie = `${TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    dispatch ({
        type: SIGN_OUT
    })
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
