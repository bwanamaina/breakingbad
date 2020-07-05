import React from 'react';

import Spinner from '../Spinner';
import Item from './Item';
import './style.css';

interface ICard {
  items: Array<Character>;
  isLoading: boolean;
}

const Card: React.FC<ICard> = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items &&
        items.length > 0 &&
        items.map((item) => <Item key={item.char_id} item={item}></Item>)}
    </section>
  );
};

export default Card;
