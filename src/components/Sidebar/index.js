import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';
//import carticon from '../../images/carticon.svg';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Home</SidebarLink>
        <SidebarLink to='/'>About Us</SidebarLink>
        <SidebarLink to='/'>Delivery</SidebarLink>
        <SidebarLink to='/'>Contact Us</SidebarLink>
        <SidebarLink to='/'>Your Cart</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Book A Table</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
