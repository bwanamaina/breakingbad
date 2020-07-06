import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Card from '../components/Card';
import data from '../data';
import Spinner from '../components/Spinner';
import Item from '../components/Card/Item';

describe('<Card/> component', () => {
  let wrapper: ShallowWrapper<{}, {}, any>;
  const isLoading = false;

  beforeEach(() => {
    wrapper = shallow(<Card items={data} isLoading={isLoading} />);
  });

  test('Should render <Spinner/> on mount', () => {
    const isLoading = true;
    wrapper = shallow(<Card items={data} isLoading={isLoading} />);
    expect(wrapper.find(Spinner)).toBeTruthy();
  });

  test('Should have inner wrapper <section/> tag when done loading', () => {
    expect(wrapper.find('section.cards').length).toEqual(1);
  });

  test('Should render 50 <Items/>', () => {
    expect(wrapper.find(Item).length).toEqual(50);
  });
});
