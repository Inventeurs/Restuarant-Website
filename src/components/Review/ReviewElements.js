import styled from 'styled-components';

export const ReviewContainer = styled.div`
  min-height: 60vh;
  padding: 2rem;
  font-family: 'Lato';
  background: #fafafa;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  z-index: 1;
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.05;
  border-radius: 20px;
  background: #fff;
  width: 89%;
  z-index: 1;

  @media (max-width: 820px) {
    width: 93%;
    margin: 0.5rem;
  }
`;

export const ReviewImg = styled.img`
  height: 12%;
  width: 12%;
  z-index: 1;

  @media (max-width: 820px) {
    height: 10%;
    width: 10%;
  }
`;

export const ReviewHeading = styled.h1`
  color: #535353;
  font-size: 4rem;
  padding-left: 8rem;
  padding-bottom: 4.5rem;
  z-index: 1;
  font-family: 'Lato';

  @media screen and (max-width: 820px) {
    margin: 0 auto;
    font-size: 3rem;
    padding-bottom: 4rem;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #505050;
  font-weight: light;
  width:500px;
  padding: 2rem;
  padding-bottom: 15px;
  transition: 0.3s ease-in-out;
  z-index: 1;

  @media (max-width: 820px) {
    flex-direction: column;
  }

`;

export const ReviewMiniItem1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 1.5rem;
  transition: 0.3s ease-in-out;
  z-index: 1;

  @media (max-width: 820px) {
    padding-left: 0;
    padding-top: 0.5rem;
  }
`;

export const ReviewMiniItem2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 0rem;
  padding-bottom: 35px;
  z-index: 1;
`;

export const ReviewTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  z-index: 1;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }
`;

export const ReviewDesc = styled.p`
  font-size: 0.75rem;
  z-index: 1;

  @media screen and (max-width: 820px) {
    font-size: 0.65rem;
  }
`;

export const ReviewDate = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  z-index: 1;

  @media screen and (max-width: 820px) {
    font-size: 0.65rem;
  }
`;

export const ReviewData = styled.p`
  font-size: 1rem;
  z-index: 1;

  @media screen and (max-width: 820px) {
    font-size: 0.75rem;
  }
`;
