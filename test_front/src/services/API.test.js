/**
 * @author: Guillaume Nachury 
 */

 import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {doLogin} from './API';

Enzyme.configure({ adapter: new Adapter()});

describe('API calls', () =>{
    it('Checks a valid login and password', () => {
        return doLogin("guillaume@test.com","azeaze").then(()=> expect(true).toEqual(true)).catch(()=> expect(false).toEqual(true))
      });
    
      it('Checks a valid login and but wrong password', () => {
        return doLogin("guillaume@test.com","d").then(()=> expect(true).toEqual(false)).catch(()=> expect(false).toEqual(false))
      });

      it('Checks a invalid login but a valid password', () => {
        return doLogin("ss@test.com","azeaze").then(()=> expect(true).toEqual(false)).catch(()=> expect(false).toEqual(false))
      });
} )
