/**
 * Combine all reducers
 * @author: Guillaume Nachury 
 */
import {combineReducers} from 'redux';
import commonReducer from './CommonReducer';
import loginReducer from './LoginReducer';

const appReducers = combineReducers({
    commonReducer,
    loginReducer
});

export default appReducers