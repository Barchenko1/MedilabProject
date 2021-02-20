import apis from "./apis";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

export const createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}

export const logout = () => {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('roles');
    // deleteAxiosInterceptors();
}

export const isUserLoggedIn = () => {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    return user !== null;

}

export const setupAxiosInterceptors = (token) => {
    apis.interceptors.request.use(
        (config) => {
            if (isUserLoggedIn()) {
                config.headers.authorization = token
            }
            return config
        }
    )
}

export const registerSuccessfulLogin = ({password}, {username, authorities }) => {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem("login", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem('token', createBasicAuthToken(username, password));
    sessionStorage.setItem('roles', JSON.stringify(authorities));
    // setupAxiosInterceptors(createBasicAuthToken(username, password))
}