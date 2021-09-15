import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Menu = styled.nav`
  height: 80px;
  text-aling: centre;
  padding: 2 rem;
`;

export const MenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
  color: #919191;
`;

export const MenuLink = styled(Link)`
  padding-top: 2rem;
  font-size: 34px;
  cursor: pointer;
  text-decoration: none;
  color: #8A8A8A;
`;

export const MenuH = styled.h1`
  font-size: 65px;
  color: #535353;
`;

