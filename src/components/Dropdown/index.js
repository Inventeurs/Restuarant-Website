import React from 'react';
//import {DropdownContainer, DropdownMenu, DropdownLink, Btn} from './DropdownElements';
import './dropdown.css';

/*
const Dropdown = (//{ isOpen2, toggle2 }) => {
  return (
    <DropdownContainer //isOpen={isOpen2} onClick={toggle2}>
      <Btn>Content</Btn>
      <DropdownMenu>
        <DropdownLink to='../components/Menu'>Starters</DropdownLink>
        <DropdownLink to='../components/Menu'>Main Course</DropdownLink>
        <DropdownLink to='../components/Menu'>Deserts</DropdownLink>
        <DropdownLink to='../components/Menu'>Soups</DropdownLink>
        <DropdownLink to='../components/Menu'>Drinks</DropdownLink>
      </DropdownMenu>
    </DropdownContainer>
  );
};*/

const Dropdown = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Contents</button>
      <div class="dropdown-content">
        <a href="../components/Menu">Starters</a>
        <a href="../components/Menu">Main Course</a>
        <a href="../components/Menu">Deserts</a>
        <a href="../components/Menu">Soups</a>
        <a href="../components/Menu">Drinks</a>
      </div>
    </div>
  );
};

export default Dropdown;
