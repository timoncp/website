import React from 'react';

import { NavLink } from 'react-router-dom';

import './navbar.css';

function Navbar(props) {
  const cls = props.scrollY > 45 ? 'navbar scrolled' : 'navbar';

  return (
    <div className={cls}>
      <NavLink exact className='navbar-link' to='/'>Home</NavLink>
      <NavLink className='navbar-link' to='/about'>About</NavLink>
      <NavLink className='navbar-link' to='/work'>Previous Work</NavLink>
      <NavLink className='navbar-link' to='/services'>Services</NavLink>
    </div>
  );
}

export default Navbar;
