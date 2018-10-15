import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <App /> );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state of favoriteFoodArray set to an empty array', () => {
    expect(wrapper.state().favoriteFoodArray).toEqual([]);
  });

  it('should update state of favoriteFoodArray when addFoodToFavorites is called', () => {
    wrapper.instance().addFoodToFavorites('chicken nuggets');
    wrapper.instance().addFoodToFavorites('macaroni and cheese');

    expect(wrapper.state().favoriteFoodArray.length).toEqual(2);
  });

});


