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
  Location,
  Contact
} from './FooterElements';

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
                <Location/>
                <DetailCardInfo>
                  <DetailCardTitle>Location</DetailCardTitle>
                  <DetailCardDesc>Sector 11, Dwarka, New Delhi</DetailCardDesc>
                </DetailCardInfo>
              </DetailCardCard>
              <DetailCardCard>
                <Contact/>
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
