import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header from '../components/Header';

describe('<Header/> component', () => {
  let wrapper: ShallowWrapper<{}, {}, any>;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test('Should have <header/> tag', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  test('Should have logo <img/> tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});
