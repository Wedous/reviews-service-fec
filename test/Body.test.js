import React from 'react';
import {shallow, mount, render, configure} from 'enzyme';
import Body from '../client/components/Body.js';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import {cleanup, fireEvent, waiForElement} from 'react-testing-library';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('<Body />', ()=>{
    test('Body Component should mount to DOM correctly',()=>{
        // const wrapper = render(<Body stars="bars" />)
        // expect(wrapper).toHaveTextContent;
    });  
});