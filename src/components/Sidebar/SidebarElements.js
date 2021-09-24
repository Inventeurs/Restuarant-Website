import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background: #ff944d;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 70px);
  text-align: center;

  @media (max-width: 820px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-weight: bold;
  font-size: 1.5 rem;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: #fafafa;
  
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #535353;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  padding: .5rem 1.5rem;
  border-radius: 49rem;
  border-width: 0;
  background: #fff;
  color: #535353;
  transition: 0.2s ease-out;
  z-index: 1;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF944D;
  }
`;
