import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Footer.scss';

export default () => (
  <footer className="footer">
    <span>
      React HN by Chidex |
      {' '}
      <Link to="#top">
        {' '}
        Go up
      </Link>
    </span>
    <div>
      <a href="https://github.com/JaphethCA/hacker-news-clone">
        See code on Github
      </a>
    </div>
  </footer>
);
