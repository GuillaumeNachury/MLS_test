/**
 * @author: Guillaume Nachury 
 */
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WaitState from './WaitState';

Enzyme.configure({ adapter: new Adapter()});

describe('<WaitState /> ', () =>{
    it('Checkmark should not be displayed while not logged in', () => {
        const wrpr = Enzyme.mount(<WaitState />);
        expect(wrpr.exists('.checkmark.draw')).toEqual(false);
      });

      it('Checkmark should render when logged in', () => {
        const wrpr = Enzyme.mount(<WaitState isLogged={true}/>);
        expect(wrpr.exists('.checkmark.draw')).toEqual(true);
      });
} )
