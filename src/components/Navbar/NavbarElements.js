import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

export const Nav = styled.nav`
  height: 80px;
  text-aling: centre;
  z-index: 1;
`;

export const NavIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
  color: #fff;
  padding: 2rem;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  color: #535353;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
`;

export const NavLink2 = styled(Link)`
  padding-top: 0.5rem;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;


export const NavBtn = styled.button`
  font-size: 1rem;
  padding: .5rem 1.5rem;
  border-radius: 49rem;
  border-width: 0;
  background: #fff;
  color: #535353;
  transition: 0.2s ease-out;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.5);
  z-index: 1;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF9F0D;
  }
`;

export const Bars = styled(CgShoppingCart)`
  font-size: 2rem;
  z-index: 1;
`;

export const NavImg1 = styled.img`
  width: 100%;
  margin-left: 400px;
  margin-top: -300px;
  z-index: 0;
`;
