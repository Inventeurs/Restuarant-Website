import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 90px;
  padding-top: 1.5rem;

  &:hover {
    display: block;
  }
`;
//left: ${({ isOpen2 }) => (isOpen2 ? '0' : '-1000px')};

export const Btn = styled.button`
  background-color: #FF944D;
  color: #fff;
  padding: 1rem 1.5rem;
  font-size: 16px;
  border: none;
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  &:hover {
    display: block;
  }
`;

export const DropdownLink = styled(Link)`
  color: #535353;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fafafa;
  }
`;
