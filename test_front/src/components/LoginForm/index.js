/**
 * @author: Guillaume Nachury 
 */
import {connect} from 'react-redux';
import LoginForm from './LoginForm';

import {act_setLoginValue, act_requestLogin} from '../../actions/LoginActions';

function mapStateToProps(state){
    return {
        ...state.loginReducer,
    }
}

export default connect(mapStateToProps, {act_requestLogin, act_setLoginValue})(LoginForm);