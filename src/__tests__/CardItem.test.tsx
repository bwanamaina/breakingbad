import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Item from '../components/Card/Item';
import data from '../data';

describe('<Item/> component', () => {
  let wrapper: ShallowWrapper<{}, {}, any>;
  const item: Character = data[0];

  beforeEach(() => {
    wrapper = shallow(<Item item={item} />);
  });

  test('Should have profile photo <img/> tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  test('Should have a wrapper <div/> tag', () => {
    expect(wrapper.find('div.card').length).toEqual(1);
  });

  test('Should have inner wrapper <div/> tag', () => {
    expect(wrapper.find('div.card-inner').length).toEqual(1);
  });

  test('Should have front wrapper <div/> tag', () => {
    expect(wrapper.find('div.card-front').length).toEqual(1);
  });

  test('Should have back wrapper <div/> tag', () => {
    expect(wrapper.find('div.card-back').length).toEqual(1);
  });

  test('Should have character name <h1/> tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  test('Should display character name on <h1/> tag', () => {
    expect(wrapper.find('h1').text()).toEqual(item.name);
  });

  test('Should have <ul/> tag', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  test('Should have 7 <li/> tags', () => {
    expect(wrapper.find('li').length).toEqual(7);
  });
});
