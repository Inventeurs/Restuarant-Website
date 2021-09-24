import styled from 'styled-components';

export const DetailCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1;
  width: 100%;
  height: 40vh;
  color: #535353;
  background: #fafafa;
  padding-top: 95px;
  flex-wrap: wrap;

  @media (max-width: 820px) {
    flex-direction: column;
    aling-items: center;
    justifying-content: space-between;
    margin: 0 auto;
    height: 60vh;
  }
`;

export const DetailCardCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aling-items: center;
  height: 18vh;
  width: 298px;
  border-radius: 25px;
  z-index: 1;
  background: white;
  padding: 0.75rem 1rem;

  @media (max-width: 820px) {
    width: 50%;
    height: 14vh;
    margin: 0 auto;
  }
 
`;

export const DetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 10vh;
  align-items: flex-start;
  padding-top: 3rem;
  width: 50%;
  z-index: 1;
  margin-left: -0.5rem;

  @media (max-width: 820px) {
    padding-top: 1.5rem;
  }
`;

export const DetailCardTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: bolder;
  z-index: 1;
  padding-bottom: 0.25rem;

  @media (max-width: 820px) {
    font-size: 0.75rem;
  }
`;

export const DetailCardDesc = styled.p`
  font-family: 'Lato';
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #919191;
  z-index: 1;

  @media (max-width: 820px) {
    font-size: 0.6rem;
  }
`;

export const DetailImg = styled.img`
  height: 55%; 
  width: 50%;
  z-index: 1;
  margin-top: 1.5rem;
  margin-left: -2rem;

  @media (max-width: 820px) {
    height: 40%;
    width: 40%;
  } 
`;

