// react libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import './NavigationBar.scss'

class NavigationBar extends Component {
  render() {
    return (
      <div className="container">

        <nav className="nav">
          <Link to="/" className="nav-brand">
            <img
              src="https://news.ycombinator.com/y18.gif"
              alt="hacker news"
            />
          </Link>
          <ul className="nav_menu">
            <li className="nav_menu-item"><Link to="new">new</Link></li>
            <li className="nav_menu-item"><Link to="top">top</Link></li>
            <li className="nav_menu-item"><Link to="show">show</Link></li>
            <li className="nav_menu-item"><Link to="comments">comments</Link></li>
            <li className="nav_menu-item"><Link to="ask">ask</Link></li>
            <li className="nav_menu-item"><Link to="jobs">jobs</Link></li>
            <li className="nav_menu-item"><Link to="submit">submit</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;
