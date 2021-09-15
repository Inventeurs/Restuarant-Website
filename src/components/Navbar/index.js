import React from 'react';
import { Nav, NavLink, NavIcon, NavLink2, NavBtn, Bars, NavImg1 } from './NavbarElements';
import design1 from '../../images/design01.svg';

const Navbar = (/*{ toggle }*/) => {
  return (
      <Nav>
          <NavIcon>
            <NavLink to='/'>Shubham Valley</NavLink>
            <NavBtn>Home</NavBtn>
            <NavLink2 to='/'>About Us</NavLink2>
            <NavLink2 to='/'>Delivery</NavLink2>
            <NavLink2 to='/'>Contact Us</NavLink2>
            <Bars />
            <NavBtn>Book A Table</NavBtn>
          </NavIcon>
          <NavImg1 src= {design1} alt="Design"/>
      </Nav>
  );
};

export default Navbar;
