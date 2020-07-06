import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import Pagination from '../components/Pagination';
import data from '../data';

describe('<Search/> Component', () => {
  const onPaginate = jest.fn();
  const charactersPerPage = 8;
  const totalCharacters = data.length;
  let wrapper: ShallowWrapper<{}, {}, any>;

  beforeEach(() => {
    wrapper = shallow(
      <Pagination
        onPaginate={onPaginate}
        charactersPerPage={charactersPerPage}
        totalCharacters={totalCharacters}
      />,
    );
  });

  it('Should have pagination wrapper <div/> tag', () => {
    expect(wrapper.find('div.pagination').length).toEqual(1);
  });

  it('Should have 7 pagination <button/> tag', () => {
    expect(wrapper.find('button').length).toEqual(7);
  });

  test('Should perform button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(onPaginate).toHaveBeenCalled();
  });

  test('Should add active class to button after click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('button').at(0).hasClass('active')).toBeTruthy();
  });
});
