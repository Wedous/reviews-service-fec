import React, {Component} from 'react';
import Review from '../client/components/Review.js'

test('Review Component test should exist',()=>{
    expect(true).toBeTruthy();
});

test('Should be able to connect to review.js and get access to Review component',()=>{
    expect(Review).toBeDefined();
});