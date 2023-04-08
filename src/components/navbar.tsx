import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav>
      <ul>
        <div className = "navbar absolute flex flex-col">
          <div className = " flex flex-col">
            <li>
              <NavLink className="navlink" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/map">Map</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/contact">Contact</NavLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;