import styled from 'styled-components';

/*export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;*/

export const HomeContainer = styled.div`
  background: #fff;
  height: 100vh;
`;

export const HomeContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
`;

export const HomeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeP = styled.p`
  font-size: 65px;
  margin-bottom: 2rem;
  color: #535353;
  text-transform: capitalize;
  line-height: 5rem;
`;
export const HomeImg = styled.img`
  min-width: 500px;
  height: 500px;
  max-width: 100%;
  aling: right;
  margin-top: 10rem;
  margin-right: 5rem;
`;


export const HomeBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 3rem 1rem 2rem;
  border-radius: 49rem;
  border-color: #707070;
  border-width: thin;
  border-width: 0;
  background: #FF9F0D;
  color: #fff;
  transition: 0.2s ease-out;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #535353;
  }
`;
