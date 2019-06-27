/**
 * @author: Guillaume Nachury 
 */

 import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './App';
import LoginForm from './components/LoginForm';
import AppContent from './components/AppContent';

Enzyme.configure({ adapter: new Adapter()});

describe('<App /> ', () =>{
    it('Renders login route', () => {
        const wrpr = Enzyme.shallow(<App isLogged={false} />);
        expect(wrpr.find(LoginForm)).toHaveLength(1);
        expect(wrpr.find(AppContent)).toHaveLength(0);
      });

      it('Renders App content route', async () => {
        const wrpr = Enzyme.shallow(<App isLogged={true} />);
        expect(wrpr.find(LoginForm)).toHaveLength(0);
        expect(wrpr.find(AppContent)).toHaveLength(1);
        
      });

      
} )
