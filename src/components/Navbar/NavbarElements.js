import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";

export const Nav = styled.nav`
  height: 10vh;
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
  background: #fafafa;
  margin: 0 auto;
  width:94%;
`;

export const NavLink = styled(Link)`
  font-family: 'Tangerine';
  font-weight: bold;
  color: #535353;
  font-size: 2.5rem;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
`;

export const NavLink2 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  padding-top: 0.5rem;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: #fafafa;
  transition: 0.3s ease-in-out;

  @media (max-width:1024px) {
    display: none;
  }
  
  @media (max-width: 820px) {
    display: none;
  }
`;


export const NavBtn1 = styled.button`
  font-size: 0.5 rem;
  font-weight: 700;
  padding: .05rem 1.25rem;
  border-radius: 49rem;
  border-width: 0;
  background: #fff;
  color: #535353;
  transition: 0.2s ease-out;
  z-index: 1;
  transition: 0.3s ease-in-out;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF944D;
  }

  @media (max-width:1024px) {
    display: none;
  }

  @media (max-width:820px) {
    display: none;
  }
`;

export const NavBtn2 = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: .75rem 1.75rem;
  border-radius: 49rem;
  border-width: 0;
  background: #fff;
  color: #535353;
  transition: 0.2s ease-out;
  z-index: 1;
  transition: 0.3s ease-in-out;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF944D;
  }

  @media (max-width:1024px) {
    display: none;
  }

  @media (max-width:820px) {
    display: none;
  }
`;

export const NavImg2 = styled.img`
  height: 2%; 
  width: 2%;
  z-index: 1;
  cursor: pointer;

  @media (max-width:1024px) {
    display: none;
  }

  @media (max-width:820px) {
    display: none;
  }
`;

export const Bars = styled(GiHamburgerMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  color: #fafafa;
  display: none;
  z-index: 1;

  @media (max-width:1024px) {
    display: block;
    position: absolute;
    top: 37px;
    right: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
  }

  @media (max-width:820px) {
    display: block;
    position: absolute;
    top: 37px;
    right: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
  }
`;

export const NavImg1 = styled.img`
  width: 68%;
  margin-top: -110px;
  margin-left: 487px;
  z-index: -1;
  transform: translate(0,-2%);

  @media (max-width:1300px) {
    width: 80%;
    margin-top: -111px;
    margin-left: 217px;
    z-index: -1;
    transform: none;
  }

  @media (max-width:820px) {
    width: 105%;
    margin-top: -107px;
    margin-left: -25px;
    z-index: -1;
    transform: none;
  }
`;
