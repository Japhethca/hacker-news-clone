// react component
import React from 'react';

// components
import Item from './Item';

// styles
import './ItemList.scss';

type Props = {
  items: any[]
};

const ItemList = ({ items }: Props) => (
  <ul className="item__list">
    {items && items.map((itemId, index) => (
      <Item number={index + 1} itemId={itemId} key={itemId} />
    ))}
  </ul>
);

export default ItemList;
