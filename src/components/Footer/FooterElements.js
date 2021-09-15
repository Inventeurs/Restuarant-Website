import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgPhone } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  background-color: white;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const Media = styled.section`
  max-width: 1300px;
  width: 100%;
  border-top: 1px solid #535353;
`;

export const MediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  color: #FF9F0D;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const FooterLink = styled.a`
  color: #535353;
  margin-bottom: 2px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #FF9F0D;
      transition: 200ms ease-in;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
`;
export const DetailCardCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  line-height: 1.25;
  padding: 1rem;
`;

export const DetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 1rem;
`;

export const DetailCardTitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  font-weight: bold;
  color: #535353;
`;

export const DetailCardDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #919191;
`;

export const Location = styled(FaMapMarkerAlt)`
  font-size: 2rem;
  color: #FF9F0D;
  margin-top:1rem;
`;

export const Contact = styled(CgPhone)`
  font-size: 2rem;
  color: #FF9F0D;
  margin-top:1rem;
`;
