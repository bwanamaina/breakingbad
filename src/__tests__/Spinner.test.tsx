import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../components/Spinner';

describe('<Spinner/> component', () => {
  test('Should have an <img/> tag', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('img').length).toEqual(1);
  });
});
