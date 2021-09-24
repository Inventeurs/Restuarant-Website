import React from 'react';
import { DetailCardWrapper, DetailCardTitle, DetailCardCard, DetailCardInfo, DetailCardDesc, DetailImg } from './DetailCardElements';
import clockicon from '../../images/clockicon.svg';
import locationicon from '../../images/locationicon.svg';
import phoneicon from '../../images/phoneicon.svg';


/*const DetailCard = ({data }) => {
  return (
    <DetailCardContainer>
      <DetailCardWrapper>
        {data.map((DetailCard, index) => {
          return (
            <DetailCardCard key={index}>
              <DetailCardInfo>
                <DetailCardTitle>{DetailCard.name}</DetailCardTitle>
                <DetailCardDesc>{DetailCard.desc}</DetailCardDesc>
              </DetailCardInfo>
            </DetailCardCard>
          );
        })}
      </DetailCardWrapper>
    </DetailCardContainer>
  );
};*/

const DetailCard = () => {
  return (
      <DetailCardWrapper>
          <DetailCardCard>
            <DetailImg src= {clockicon} alt="Cart"/>
            <DetailCardInfo>
              <DetailCardTitle>Working Hours</DetailCardTitle>
              <DetailCardDesc>10:00AM - 10:00PM</DetailCardDesc>
            </DetailCardInfo>
          </DetailCardCard>
          <DetailCardCard>
            <DetailImg src= {locationicon} alt="Cart"/>
            <DetailCardInfo>
              <DetailCardTitle>Location</DetailCardTitle>
              <DetailCardDesc>Sector 11, Dwarka, New Delhi</DetailCardDesc>
            </DetailCardInfo>
          </DetailCardCard>
          <DetailCardCard>
            <DetailImg src= {phoneicon} alt="Cart"/>
            <DetailCardInfo>
              <DetailCardTitle>Contact Number</DetailCardTitle>
              <DetailCardDesc>+91 44833 34494</DetailCardDesc>
            </DetailCardInfo>
          </DetailCardCard>
      </DetailCardWrapper>
  );
};

export default DetailCard;
