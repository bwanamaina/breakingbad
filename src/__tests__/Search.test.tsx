import React from 'react';
import { mount } from 'enzyme';

import Search from '../components/Search';

describe('<Search/> Component', () => {
  const searchQuery = jest.fn();
  const input = 'input[type="text"]';
  let wrapper: any;
  const searchValue = 'Skyler White';

  beforeEach(() => {
    wrapper = mount(<Search searchQuery={searchQuery} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have search input', () => {
    expect(wrapper.find(input).length).toEqual(1);
  });

  it('calls setSearchText with Skyler White', () => {
    wrapper.find(input).simulate('change', {
      target: { value: searchValue },
    });
    expect(wrapper.find(input).instance().value).toEqual(searchValue);
  });

  it('allows us to set props', () => {
    wrapper.setProps({ searchQuery: searchValue });
    expect(wrapper.props().searchQuery).toEqual(searchValue);
  });
});
