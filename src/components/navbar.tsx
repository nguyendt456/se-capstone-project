import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav>
      <ul>
        <div className = "flex flex-col gap-[30px] p-[10px] text-black w-[70px] items-center h-[100vh]">
          <div className = "flex flex-col gap-[40px] items-center justify-center">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/map">Map</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;