import styled from 'styled-components';

/*export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;*/

export const HomeContainer = styled.div`
  background: #fafafa;
  height: 100vh;
  z-index: 999;
`;

export const HomeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  transition: 0.2s ease-out;
  margin: 0 auto;
  width:80%;
  height: 70vh;
  z-index: 999;
  padding-top: 3rem;

  @media (max-width: 1300px) {
    margin-top: 3rem;
    align-items: center;
    font-size: 50px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    margin-top: 6rem;
    flex-wrap: nowrap;
  }
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 600px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  transition: 0.2s ease-out;
  z-index: 999;

  @media (max-width: 1300px) {
    font-size: 50px;
  }

  @media(max-width: 820px) {
    margin-top: 3.5rem;
    width: 80%;
    height: 50vh;
  }
`;

export const HomeP = styled.p`
  font-size: 60px;
  margin-bottom: 2rem;
  color: #535353;
  text-transform: capitalize;
  line-height: 5rem;
  transition: 0.2s ease-out;
  z-index: 999;

  @media (max-width:1024px) {
    font-size: 50px;
    line-height: 3rem;
  }

  @media(max-width: 820px) {
    font-size: 35px;
    line-height: 2.5rem;
  }

`;
export const HomeImg = styled.img`
  height: 75vh;
  max-width: 100%;
  margin-top: 5rem;
  margin-left: -5rem;
  margin-right: 7rem;
  transition: 0.2s ease-out;
  z-index: 999;

  @media (max-width:1300px) {
    width:80%;
    height: 80%;
    padding-left: 3rem;
  }

  @media(max-width: 820px) {
    margin: 0;
    margin-top: 3rem;
    height: 75%;
    width: 80%;
    margin-left: 110px;
  }
`;


export const HomeBtn = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: .75rem 3rem .75rem 2rem;
  border-radius: 49rem;
  border-width: 0;
  background: #FF944D;
  color: #fafafa;
  transition: 0.2s ease-out;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.2);
  z-index: 999;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #535353;
  }

  @media(max-width: 820px) {
    padding: 0.5rem 1.5rem 0.5rem 0.75rem;
    font-size: 1rem;
  }
`;
