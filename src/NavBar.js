import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div className='navbar'>
        <h1>Bwakeye</h1>
        <div className='links'>
          <Link to='/'>Muhira</Link>
          <Link to='/create'>Shirako</Link>
        </div>
      </div>
    );
};

export default NavBar;
