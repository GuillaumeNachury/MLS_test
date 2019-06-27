/**
 * Manage the login state
 * @author: Guillaume Nachury 
 */
import { produce } from 'immer';
import {
    LOGINFORM_ON_REQUEST_LOGIN_ERROR, 
    LOGINFORM_ON_REQUEST_LOGIN_SUCCESS,
    LOGINFORM_REQUEST_LOGIN,
    LOGINFORM_SET_LOGIN,
    act_onLoginSuccess,
    act_onLoginFail
    } from '../actions/LoginActions.js';

import { doLogin } from '../services/API';

import { emailValidator } from '../utils/index';

const default_state = {
    error:undefined,
    hasValidLogin : false,
    isLoading: false,
    isLogged : false,
    login : '',
}


const reducer = (state=default_state, action) => {
    switch(action.type){
        case LOGINFORM_ON_REQUEST_LOGIN_ERROR :
            return produce(state, draft => {
                draft.error = action.error;
                draft.isLoading = false;
                draft.isLogged = false;
            })
        case LOGINFORM_ON_REQUEST_LOGIN_SUCCESS : 
            return produce(state, draft => {
                draft.error = undefined;
                draft.isLoading = false;
                draft.isLogged = true;
            })
        case LOGINFORM_SET_LOGIN : 
            return produce(state, draft => {
                draft.login = action.login;
                draft.hasValidLogin = emailValidator(action.login)
            })
        case LOGINFORM_REQUEST_LOGIN :
            doLogin(state.login, action.password)
            .then(() => action.asyncDispatch(act_onLoginSuccess()))
            .catch(err => action.asyncDispatch(act_onLoginFail(err)));

            return produce(state, draft => {
                draft.isLoading = true;
            })
        default:
            return {...state}
    }
}

export default reducer;

