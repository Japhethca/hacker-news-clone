// react libraries
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// styles
import './NavigationBar.scss';

class NavigationBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav">
          <NavLink to="/top" className="nav__brand">
            <span className="nav__brand-name">
              React HN
            </span>
          </NavLink>
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/new">
                new
              </NavLink>

            </li>
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/top">
                top
              </NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/show">
                show
              </NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/comments">
                comments
              </NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/ask">
                ask
              </NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink activeClassName="active__link--color" to="/jobs">
                jobs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
