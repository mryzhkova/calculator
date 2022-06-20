import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './components';


const Header = () => (
    <StyledHeader>
      <div>Calculator App</div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/class">Home(C)</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/settings-class">Settings(C)</NavLink>
      </div>
    </StyledHeader>
  );

export default Header;