import styled from 'styled-components';
import {HiDotsHorizontal} from 'react-icons/hi';

export const MenuContainer = styled.div`
  min-height: 60vh;
  padding: 5rem;
  font-family: 'Lato';
  background: #fafafa;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 40vh;
  width: 80%;
  background: #D5E0FF;
  margin-top: 3rem;

  @media (max-width: 820px) {
    height: 50vh;
    width: 93%;
    margin: 0.5rem;
  }
`;

export const MenuImg = styled.img`
  height: 80%;
  width: 85%;
  margin-top: 2px;
`;

export const MenuImg2 = styled.img`
  height: 15px;
  width: 15px;
`;

export const MenuImg3 = styled.img`
  height: 30%;
  width: 30%;
  display: block;
  margin-left: auto;
  margin-top: -40px;

  @media (max-width:1300px) {
    margin-top: -58px;
  }
`;

export const MenuHeading = styled.h1`
  color: #535353;
  font-size: 65px;
  
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: #505050;
  padding: 0 2rem;
  line-height: 1.05;
  margin-top: 0px;
`;

export const MenuMiniItem1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  float:left;
  width: 70%;
`;

export const MenuTitle = styled.h4`
  font-size: 1 rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

export const MenuPrice = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const MenuDesc = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const Dots = styled(HiDotsHorizontal)`
  font-size: 3rem;
  color: #5482FF;
  margin-left: 1.5rem;
  overflow: visible;
`;
