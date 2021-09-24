import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  Media,
  MediaWrap,
  FooterDetails,
  FooterLink,
  Logo,
  Icons,
  DetailCardTitle,
  DetailCardCard,
  DetailCardInfo,
  DetailCardDesc,
  DetailImg,
  DetailImg2
} from './FooterElements';
import locationicon from '../../images/locationicon.svg';
import phoneicon from '../../images/phoneicon.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Media>
          <MediaWrap>
            <Logo to='/'>Shubham Valley</Logo>
            <FooterDetails>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Menu</FooterLink>
              <FooterLink href="#">Delivery</FooterLink>
              <FooterLink href="#">Cart</FooterLink>
            </FooterDetails>
            <Icons>
              <DetailCardCard>
                <DetailImg src= {locationicon} alt="Cart"/>
                <DetailCardInfo>
                  <DetailCardTitle>Location</DetailCardTitle>
                  <DetailCardDesc>Sector 11, Dwarka, New Delhi</DetailCardDesc>
                </DetailCardInfo>
              </DetailCardCard>
              <DetailCardCard>
                <DetailImg2 src= {phoneicon} alt="Cart"/> 
                <DetailCardInfo>
                  <DetailCardTitle>Contact Number</DetailCardTitle>
                  <DetailCardDesc>+91 44833 34494</DetailCardDesc>
                </DetailCardInfo>
              </DetailCardCard>
            </Icons>
          </MediaWrap>
        </Media>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
