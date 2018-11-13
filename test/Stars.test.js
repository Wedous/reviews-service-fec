import React from 'react';
import {shallow, mount, render, configure} from 'enzyme';
import Stars from '../client/components/Stars.js';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import {cleanup, fireEvent, waiForElement} from 'react-testing-library';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('<Stars />', ()=>{
    test('Stars Component should mount to DOM correctly',()=>{
        const wrapper = shallow(<Stars stars="bars" />)
        expect(wrapper.find('Rating').length).toBe(1);
    });  
});