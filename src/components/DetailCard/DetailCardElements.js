import styled from 'styled-components';
import { CgPhone } from 'react-icons/cg';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';


export const DetailCardContainer = styled.div`
  min-height: 40vh;
  padding: 10rem 0;
  color: #535353;
  z-index: 1;
`;

export const DetailCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  z-index: 1;
`;

export const DetailCardCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;
  padding: 1rem 0.5rem;
  border-radius: 36px;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.5);
  z-index: 1;
  background: white;
`;

export const DetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 1rem;
  z-index: 1;
`;

export const DetailCardTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 1;
`;

export const DetailCardDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #919191;
  z-index: 1;
`;

export const Time = styled(FaClock)`
  font-size: 3rem;
  color: #FF9F0D;
  margin-top: 1.5rem;
  z-index: 1;
`;

export const Location = styled(FaMapMarkerAlt)`
  font-size: 3rem;
  color: #FF9F0D;
  margin-top: 1.5rem;
  z-index: 1;
`;

export const Contact = styled(CgPhone)`
  font-size: 3rem;
  color: #FF9F0D;
  margin-top: 1.5rem;
  z-index: 0;
`;

