// react libraries
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import tc from 'tinycolor2';

// others
import { ThemeConsumer } from '../common/themeContext';
// styles
import './NavigationBar.scss';


class NavigationBar extends Component {
  render() {
    const links = ['new', 'show', 'ask', 'jobs']
    return (
      <ThemeConsumer>
        {({theme, changeTheme}) => (
          <div className="container">
            <nav className="nav" style={{backgroundColor: theme.bg}}>
              <NavLink to="/top" className="nav__brand">
                <span className="nav__brand-name">
                  React HN
                </span>
              </NavLink>
              <ul className="nav__menu">
                {links.map(link => (
                  <li className="nav__menu-item" key={link} style={{borderLeftColor: `${theme.link}`}}>
                    <NavLink
                      style={{color: theme.link}}
                      activeStyle={{color: tc(theme.link).lighten(25)}}
                      to={`/${link}`}>
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <span
                className="theme-toggle"
                onClick={() => changeTheme()}
                style={{color: "white"}}>Change Theme</span>
            </nav>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default NavigationBar;
