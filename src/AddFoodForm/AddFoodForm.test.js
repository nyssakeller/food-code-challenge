import React from 'react';
import { shallow, mount } from 'enzyme';
import AddFoodForm from './AddFoodForm';

describe('AddFoodForm', () => {
  const mockEvent = { target: { value: 'chicken nuggets' } };

  it('should match snapshot', () => {
    const wrapper = shallow( <AddFoodForm /> );
    expect(wrapper).toMatchSnapshot();
  });

  it('has an inital state of inputValue set to an empty string', () => {
    const wrapper = shallow( <AddFoodForm /> );
    expect(wrapper.state().inputValue).toEqual('');
  });

  it('updates the state of inputValue on input change', () => {
    const wrapper = mount( <AddFoodForm addFoodToFavorites={ jest.fn() } /> );
    const input = wrapper.find('input');

    input.simulate('change', mockEvent);
    expect(wrapper.state().inputValue).toEqual('chicken nuggets');
  });

  it('resets the state of inputValue to and empty string on form submit', () => {
    const wrapper = mount( <AddFoodForm addFoodToFavorites={ jest.fn() } /> );
    const form = wrapper.find('form');

    form.simulate('submit', mockEvent);
    expect(wrapper.state().inputValue).toEqual('');
  });

});