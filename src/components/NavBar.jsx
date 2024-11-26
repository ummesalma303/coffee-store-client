import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
          <div className='flex justify-center'>
            <div className='flex space-x-4 justify-center text-center py-3'>
            <NavLink to='/'>Add Coffee</NavLink>
            {/* <NavLink to='/updateCoffee'>Update Coffee</NavLink> */}
            <NavLink to='/coffees'>Coffees</NavLink>
        </div>
          </div>
    );
};

export default NavBar;