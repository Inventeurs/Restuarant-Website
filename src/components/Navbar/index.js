import React from 'react';
import { Nav, NavLink, NavIcon, NavLink2, NavBtn1, NavBtn2, NavImg2, NavImg1, Bars} from './NavbarElements';
import design1 from '../../images/design1.png';
import carticon from '../../images/carticon.svg';

const Navbar = ({ toggle }) => {
  return (
      <Nav>
          <NavIcon>
            <NavLink to='/'>Shubham Valley</NavLink>
            <NavBtn1>Home</NavBtn1>
            <NavLink2 to='/'>About Us</NavLink2>
            <NavLink2 to='/'>Delivery</NavLink2>
            <NavLink2 to='/'>Contact Us</NavLink2>
            <NavImg2 src= {carticon} alt="Cart"/>
            <NavBtn2>Book A Table</NavBtn2>
            <Bars onClick={toggle}/>
          </NavIcon>
          <NavImg1 src= {design1} alt="Design"/>
      </Nav>
  );
};

export default Navbar;
