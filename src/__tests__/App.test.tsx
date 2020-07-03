import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import Header from '../components/Header';
import Card from '../components/Card';
import Search from '../components/Search';

describe('<App/> Component', () => {
  let component: any;

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
    expect(component.find(Card)).toBeTruthy();
  });

  test('Renders <Search/> component', () => {
    expect(component.find(Search)).toBeTruthy();
  });

  it('check number of cards rendered', () => {
    const isLoading = false;
    const items: Array<Character> = [
      {
        appearance: [3, 4],
        birthday: 'Unknown',
        category: 'Breaking Bad',
        char_id: 51,
        img:
          'https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333',
        name: 'Group Leader',
        nickname: 'Counselor',
        occupation: ['Drug & Alcohol Rehabilitation Counselor'],
        portrayed: 'Jere Burns',
        status: 'Alive',
      },
    ];
    const card = mount(<Card isLoading={isLoading} items={items} />);
    expect(card.find('div.card').length).toEqual(1);
  });
});
