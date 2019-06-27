/**
 * @author: Guillaume Nachury 
 */
import React from 'react';
import './AnimatedLoader.css';


const WaitState = ({isLogged}) => {
    return <div className={`circle-loader${isLogged ? ' load-complete':''}`}>
                {isLogged && <div className="checkmark draw"></div> }
            </div>
} 

export default WaitState;
