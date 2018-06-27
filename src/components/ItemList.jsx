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
  <ol className="item__list">
    {items && items.map(itemId => (
      <Item itemId={itemId} key={itemId} />
    ))}
  </ol>
);

export default ItemList;
