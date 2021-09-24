import React from 'react';
import { Menu, MenuH, MenuIcon, MenuLink} from './MenubarElements';

const Menubar = (/*{ toggle2 }*/) => {
  return (
    <Menu>
      <MenuIcon>
        <MenuH>Menu</MenuH>
        <MenuLink to='../components/Menu'>Starters</MenuLink>
        <MenuLink to='../components/Menu'>Main Course</MenuLink>
        <MenuLink to='../components/Menu'>Deserts</MenuLink>
        <MenuLink to='../components/Menu'>Soups</MenuLink>
        <MenuLink to='../components/Menu'>Drinks</MenuLink>
      </MenuIcon>
    </Menu>
  );
};

export default Menubar;
