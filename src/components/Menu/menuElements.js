import styled from 'styled-components';

export const MenuContainer = styled.div`
  min-height: 60vh;
  padding: 5rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  padding:2rem;
  font-weight: initial;
`;

export const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  aling-items:center;
  line-height: 1.05;
  border-radius: 20px;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.05);
  min-height: 35vh;
  width: 80%;
  background: #D5E0FF;
`;

export const MenuImg = styled.img`
  height: 85%;
  width: 85%;
`;

export const MenuImg2 = styled.img`
  height: 15px;
  width: 15px;
`;

export const MenuImg3 = styled.img`
  height: 25%;
  width: 25%;
  display: block;
  margin-left: auto;
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
  padding: 2rem;
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
