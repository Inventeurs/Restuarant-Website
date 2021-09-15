import React from 'react';
import {
  DetailCardContainer,
  DetailCardWrapper,
  DetailCardTitle,
  DetailCardCard,
  DetailCardInfo,
  DetailCardDesc,
  Time,
  Location,
  Contact
} from './DetailCardElements';

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
    <DetailCardContainer>
      <DetailCardWrapper>
          <DetailCardCard>
            <Time/>
            <DetailCardInfo>
              <DetailCardTitle>Working Hours</DetailCardTitle>
              <DetailCardDesc>10:00AM - 10:00PM</DetailCardDesc>
            </DetailCardInfo>
          </DetailCardCard>
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
      </DetailCardWrapper>
    </DetailCardContainer>
  );
};

export default DetailCard;
