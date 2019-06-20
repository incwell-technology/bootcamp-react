import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from  '../../logo.png';
import './App.css';

function Navbar() {
  return (
    <nav class="navbar navibar">
      <div class="container-fluid">
        <div class="navbar-header">
          <NavLink exact to="/" className="navbar-brand">
          <img src={logo} class="logo"/>
          </NavLink>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li class="navlist">
            <NavLink to="/about" activeClassName="nav-active" className="navlink">
              About Us
            </NavLink>
          </li>
          <li class="navlist">
            <NavLink to="/courses" activeClassName="nav-active"  className="navlink">
              Courses
            </NavLink>
          </li>
          <li class="navlist">
          <NavLink to="/mentors" activeClassName="nav-active" className="navlink">
            Mentors
            </NavLink>
          </li>
          <li class="navlist">
          <NavLink to="/events" activeClassName="nav-active" className="navlink">
            Events
            </NavLink>
          </li>
          <li class="navlist">
          <NavLink to="/courses" activeClassName="nav-active" className="navlink">
            Contact
            </NavLink>
          </li>
          <li class="unset-nav">
          <NavLink to="/enroll" activeClassName="nav-active" className="navlink-Enroll">
            Enroll
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
