import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from '../App';
import Header from '../components/Header';
import Card from '../components/Card';
import Search from '../components/Search';

describe('<App/> Component', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('renders <App/> component', () => {
    expect(component).toMatchSnapshot();
  });

  test('Renders <Header/> component', () => {
    expect(component.contains(<Header />)).toBe(true);
  });

  test('Renders <Card/> component', () => {
    expect(component.find(Card).length).toEqual(1);
  });

  test('Renders <Search/> component', () => {
    expect(component.find(Search)).toBeTruthy();
  });
});
