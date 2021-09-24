import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Menu = styled.nav`
  height: 10vh;
  text-aling: centre;

  @media screen and (max-width: 820px) {
    height: 8vh;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Lato';
  cursor: pointer;
  text-decoration: none;
  color: #8A8A8A;

  &:active {
    text-decoration: underline;
    text-decoration-color: #ff944d;
  }

  &:focus {
    text-decoration: underline;
    text-decoration-color: #ff944d;
    margin-top: 0.2rem;
  }

  @media (max-width:1024px) {
    display: none;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const MenuH = styled.h1`
  font-family: 'Lato';
  font-weight: bold;
  font-size: 4rem;
  color: #535353;

  @media screen and (max-width: 820px) {
    margin: 0 auto;
    font-size: 4rem;
  }
`;
/*
export const DropdownBtn = styled.div`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  color: #FF944D;
  display: none;

  @media (max-width: 820px) {
    display: block;
    position: absolute;
    bottom: 2rem;
    left: 0;
    -webkit-transition: all 0.3s ease-in-out;
  }
`;*/
