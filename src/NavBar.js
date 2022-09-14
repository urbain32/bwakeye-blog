import React from "react";
import { Link } from "react-router-dom";
import logo from './logo512.png'
const NavBar = () => {
    return (
      <div className='navbar'>
        <div class='logo'>
          <img src={logo} alt='' />
          <h2>
            BWA<span class='danger'>KEYE</span>
          </h2>
        </div>
        <div className='links'>
          <Link to='/'>Muhira</Link>
          <Link to='/create'>Shirako</Link>
        </div>
      </div>
    );
};

export default NavBar;
