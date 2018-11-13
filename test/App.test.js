import React from 'react';
import {shallow, mount, render, configure} from 'enzyme';
import App from '../client/App.js';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import {cleanup, fireEvent, waiForElement} from 'react-testing-library';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('<App />', ()=>{
    test('App Component should shallow mount to DOM correctly',()=>{
        const wrapper = shallow(<App stars="bars" />)
        expect(wrapper.find('Reviews').length).toBe(1);
    }); 
    test('App Component should mount to DOM correctly',()=>{
        const wrapper = mount(<App stars="bars" />)
        expect(wrapper.find('Reviews').length).toBe(1);
    });   
});

describe('App componenet test:', ()=>{
    test('App Component test should exist',()=>{
        expect(true).toBeTruthy();
    })    
    test('Should be able to connect to App.js and get access to App component',()=>{
        expect(App).toBeDefined();
    })
});



