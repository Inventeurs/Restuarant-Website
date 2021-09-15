import styled from 'styled-components';

export const ReviewContainer = styled.div`
  min-height: 60vh;
  padding: 5rem;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding:2rem;
  font-weight: initial;
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.05;
  border-radius: 20px;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.05);
`;

export const ReviewImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const ReviewHeading = styled.h1`
  color: #535353;
  font-size: 65px;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #505050;
  width:500px;
  padding: 2rem;
`;

export const ReviewMiniItem1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 0.5rem;
  padding-left: 2rem;
`;

export const ReviewMiniItem2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 0rem;
  width:500px;
`;

export const ReviewTitle = styled.h2`
  font-size: 1.25rem;
`;

export const ReviewDesc = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  color: #919191;
`;

export const ReviewDate = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  color: #919191;
`;

export const ReviewData = styled.p`
  font-size: 1rem;
  }
`;
