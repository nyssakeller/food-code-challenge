import React from 'react';
import { shallow, mount } from 'enzyme';
import AddFoodForm from './AddFoodForm';

describe('AddFoodForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount( <AddFoodForm addFoodToFavorites={ jest.fn() } /> );
  });

  it('should match snapshot', () => {
    wrapper = shallow( <AddFoodForm /> );
    expect(wrapper).toMatchSnapshot();
  });
});