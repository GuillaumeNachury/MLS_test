/**
 * @author: Guillaume Nachury 
 */
import React, {useState} from 'react';
import { Form, Input, Button, Tooltip, Icon } from 'antd';

import WaitState from './WaitState';

import './LoginForm.css';


const LoginForm = (props) => {
    const {
        act_setLoginValue,
        act_requestLogin,
        ...loginState
    } = props;
    
    const [password, setPassword] = useState('');

    /**
     * Build the form component
     */
    const renderForm = () => ( <React.Fragment>
         
            {loginState.error && <div className='LoginForm-error'>{loginState.error}</div>}
            <div className="LoginForm-form">
                <Form >
                    <Input className='LoginForm-input' type='text' value={loginState.login} 
                    onChange={evt=>act_setLoginValue(evt.target.value)} placeholder='your email'
                    suffix={
                        <Tooltip title="tips : guillaume@test.com">
                          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                      }
                      />
                    <Input.Password className='LoginForm-input' value={password} onChange={evt=>setPassword(evt.target.value)} placeholder='password'/>
                </Form>
            </div>
            
            <div className="LoginForm-footer"> 
                <Button disabled={(loginState.login === '' 
                                    || loginState.isLoading
                                    || !loginState.hasValidLogin 
                                    || password === '') 
                                }
                        onClick={() => act_requestLogin(password)}
                        >CONNECT</Button>
            </div>
            <div>
            </div>
            </React.Fragment>)


    /**
     * Build the loading / wait state
     */
    const renderLoadingState = () => (
        <div className='LoginForm-overlay'>
            <WaitState isLogged={loginState.isLogged} />
            Please wait...
        </div>
    )

    return <div className='container'>
                <div className='LoginForm-header'>SAMPLE APP</div>
               {renderForm()}
               {(loginState.isLoading || (loginState.isLoading === false && loginState.isLogged))  && renderLoadingState()}
            </div>
}

export default LoginForm;