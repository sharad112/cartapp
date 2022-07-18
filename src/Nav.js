import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
  return (
    <div className='nav'>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/team">team</NavLink>
        <NavLink to="/product">product</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/blogs">blogs</NavLink>
        
    </div>
  )
}

export default Nav