import React from 'react';
import { Menu, MenuH, MenuIcon, MenuLink} from './MenubarElements';

const Menubar = () => {
  return (
    <Menu>
      <MenuIcon>
        <MenuH>Menu</MenuH>
        <MenuLink to='/'>Starters</MenuLink>
        <MenuLink to='/'>Main Course</MenuLink>
        <MenuLink to='/'>Deserts</MenuLink>
        <MenuLink to='/'>Soups</MenuLink>
        <MenuLink to='/'>Drinks</MenuLink>
      </MenuIcon>
    </Menu>
  );
};

export default Menubar;
