import React from 'react';
import {shallow, mount, render, configure} from 'enzyme';
import YesBtn from '../client/components/YesBtn.js';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import {cleanup, fireEvent, waiForElement} from 'react-testing-library';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('<YesBtn />', ()=>{
    test('YesBtn Component should mount to DOM correctly',()=>{
        const wrapper = shallow(<YesBtn stars="bars" />)
        expect(wrapper.find('button').length).toBe(1);
    });  
});