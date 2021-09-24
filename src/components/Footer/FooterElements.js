import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #fafafa;
  height:35vh;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  background-color: #fafafa;
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
  padding-top: 1rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60%;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Tangerine';
  color: #FF944D;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    font-size: 2.5rem;
    padding: 1rem 0;
  }
`;

export const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: 'Lato';
  font-weight: bold;

  @media screen and (max-width: 820px) {
    margin: 0 auto;
    padding-top: 1rem;
  }
`;

export const FooterLink = styled.a`
  color: #535353;
  margin-bottom: 2px;
  font-size: 1rem;
  text-decoration: none;
   
  &:hover {
      color: #FF944D;
      transition: 200ms ease-in;
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Lato';
  font-weight: bold;
`;
export const DetailCardCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  line-height: 1.5;

  @media screen and (max-width: 820px) {
    padding-top: 1rem;
  }
`;

export const DetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 1rem;
`;

export const DetailCardTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #535353;

  @media screen and (max-width: 820px) {
    font-size: 0.90rem;
  }
`;

export const DetailCardDesc = styled.p`
  margin-bottom: .5rem;
  font-size: 0.75rem;
  color: #919191;

  @media screen and (max-width: 820px) {
    font-size: 0.75rem;
  }
`;

export const DetailImg = styled.img`
  height: 17%; 
  width: 17%;
  margin-top: 1rem;

  @media screen and (max-width: 820px) {
    height: 15%;
    width: 15%;
  }
`;

export const DetailImg2 = styled.img`
  height: 18.5%; 
  width: 18.5%;
  margin-top: 1rem;

  @media screen and (max-width: 820px) {
    height: 16%;
    width: 16%;
  }
`;