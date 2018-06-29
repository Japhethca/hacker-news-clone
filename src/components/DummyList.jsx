import React from 'react';

import './DummyList.scss';

type DummyListProps = {
  count?: number,
}

const DummyList = ({ count }: DummyListProps) => (
  <ol className="dummy-list">
    {
      [...Array(count)].map((_, index) => (
        <li
          key={`${index}${new Date().getMilliseconds()}`}
          className="dummy-list__item"
        />
      ))
     }
  </ol>
);

DummyList.defaultProps = {
  count: 15
};

export default DummyList;
