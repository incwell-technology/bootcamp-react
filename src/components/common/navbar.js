import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from  '../../logo.png';

function Navbar() {
  return (
    <nav className="navbar navibar">
      <div className="container-fluid">
        <div class="navbar-header">
          <NavLink exact to="/" className="navbar-brand">
          <img src={logo} className="logo"/>
          </NavLink>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="navlist">
            <NavLink to="/about" activeClassName="nav-active" className="navlink">
              About Us
            </NavLink>
          </li>
          <li className="navlist">
            <NavLink to="/courses" activeClassName="nav-active"  className="navlink">
              Courses
            </NavLink>
          </li>
          <li className="navlist">
          <NavLink to="/mentors" activeClassName="nav-active" className="navlink">
            Mentors
            </NavLink>
          </li>
          <li className="navlist">
          <NavLink to="/events" activeClassName="nav-active" className="navlink">
            Events
            </NavLink>
          </li>
          <li className="navlist">
          <NavLink to="/contact" activeClassName="nav-active" className="navlink">
            Contact
            </NavLink>
          </li>
          <li className="unset-nav">
            <NavLink to="/enroll" className="navlink-Enroll">
              Enroll
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
