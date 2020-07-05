import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from '../App';
import Header from '../components/Header';
import Card from '../components/Card';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

describe('<App/> Component', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('Should render <App/> component', () => {
    expect(component).toMatchSnapshot();
  });

  test('Should render <Header/> component', () => {
    expect(component.contains(<Header />)).toBe(true);
  });

  test('Should render <Card/> component', () => {
    expect(component.find(Card).length).toEqual(1);
  });

  test('Should render <Search/> component', () => {
    expect(component.find(Search)).toBeTruthy();
  });
  test('Should render <Pagination/> component', () => {
    expect(component.find(Pagination)).toBeTruthy();
  });
});
