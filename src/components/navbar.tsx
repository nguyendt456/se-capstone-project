import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  return (
    <nav>
      <ul>
        <div className = "navbar flex flex-col inline">
          <div className = "flex flex-col gap-5">
            <li className="nav-item">
              <NavLink className="navlink" to="/"><HomeIcon sx={{display: 'inline', width: '25px', height: '25px'}}/></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navlink" to="/vehicle"><LocalShippingIcon sx={{display: 'inline', width: '25px', height: '25px'}}/></NavLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;