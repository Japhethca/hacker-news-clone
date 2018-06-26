// react component
import React from 'react';

// components
import Item from '../Item/Item.component'

// styles
import './ItemList.scss';

const ItemList = ({ items }) => (
  <ul className="item__list">
    {items && items.map((itemId, index) => (
        <Item number={index + 1} itemId={itemId} key={itemId}/>
    ))}
  </ul>
);

export default ItemList;
