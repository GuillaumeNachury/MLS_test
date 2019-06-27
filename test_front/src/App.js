/**
 * @author: Guillaume Nachury 
 */

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';

import LoginForm from './components/LoginForm';
import AppContent from './components/AppContent';

export const App = ({isLogged}) => {

  //Quick and dirty routing system
  const [uglyRouter, setUglyRouter] = useState(isLogged ? 'app':'login');

  useEffect(()=>{
    if(isLogged){
      setTimeout(()=>setUglyRouter('app'), 500)
    }
  }, [isLogged])

  return (
    <div className="App">
      {uglyRouter === 'login' && <LoginForm /> }
      {uglyRouter === 'app' && <AppContent /> } 
    </div>
  );
}

function mapStateToProps(state){
  return{
    isLogged : state.loginReducer.isLogged
  }
}



export default connect(mapStateToProps)(App);
