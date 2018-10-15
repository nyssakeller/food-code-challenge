import React from 'react';
import { shallow, mount } from 'enzyme';
import AddFoodForm from './AddFoodForm';

describe('AddFoodForm', () => {

  it('should match snapshot', () => {
    const wrapper = shallow( <AddFoodForm /> );
    expect(wrapper).toMatchSnapshot();
  });

  it('has an inital state of inputValue set to an empty string', () => {
    const wrapper = shallow( <AddFoodForm /> );
    expect(wrapper.state().inputValue).toEqual('');
  });
});