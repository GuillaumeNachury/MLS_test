/**
 * @author: Guillaume Nachury 
 */
export const LOGINFORM_SET_LOGIN = 'LOGINFORM_SET_LOGIN';
export const LOGINFORM_REQUEST_LOGIN = 'LOGINFORM_REQUEST_LOGIN';
export const LOGINFORM_ON_REQUEST_LOGIN_SUCCESS = 'LOGINFORM_REQUEST_LOGIN_SUCCESS';
export const LOGINFORM_ON_REQUEST_LOGIN_ERROR = 'LOGINFORM_REQUEST_LOGIN_ERROR';

/**
 * Request an API login call with the given password
 * @param {String} password 
 */
export const act_requestLogin = password => {
    return {
        type : LOGINFORM_REQUEST_LOGIN, password
    }
}

/**
 * Update the login value in the state
 * @param {string} login User entered value
 */
export const act_setLoginValue = login => {
    return {
        type : LOGINFORM_SET_LOGIN, login
    }
}

/**
 * When the login successed
 */
export const act_onLoginSuccess = () => {
    return {
        type : LOGINFORM_ON_REQUEST_LOGIN_SUCCESS
    }
}

/**
 * When the login failed
 */
export const act_onLoginFail = error => {
    return {
        type : LOGINFORM_ON_REQUEST_LOGIN_ERROR, error
    }
}