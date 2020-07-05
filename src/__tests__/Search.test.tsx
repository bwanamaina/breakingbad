import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import Search from '../components/Search';
import data from '../data';

describe('<Search/> Component', () => {
  const searchQuery = jest.fn();
  const input = 'input[type="text"]';
  let wrapper: ShallowWrapper<{ value: string; searchQuery: string }, {}, any>;
  const searchValue: string = data[0].name;

  beforeEach(() => {
    wrapper = shallow(<Search searchQuery={searchQuery} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have search input', () => {
    expect(wrapper.find(input).length).toEqual(1);
  });

  it('Should change state onChange', () => {
    const textInput = wrapper.find(input);
    textInput.simulate('change', {
      target: { value: searchValue },
    });
    expect(wrapper.find(input).prop('value')).toEqual(searchValue);
  });
});
