import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {

  it('should match snapshot', () => {
    const mockArray = ['chicken nuggets', 'macaroni and cheese'];
    const wrapper = shallow( <CardContainer favoriteFoodArray={ mockArray } /> );

    expect(wrapper).toMatchSnapshot();
  });

});