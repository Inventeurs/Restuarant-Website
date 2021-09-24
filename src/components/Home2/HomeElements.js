import styled from 'styled-components';
import {CgLoadbar} from 'react-icons/cg';
import {HiDotsHorizontal} from 'react-icons/hi';

export const HomeContainer = styled.div`
  background: #fafafa;
  height: 100vh;
  z-index: 1;
  padding-top: 1rem;
  font-family: 'Lato';

  @media (max-width: 820px) {
    padding-top: -1rem;
    margin-top: -70px;
  }
`;

export const HomeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1;
  margin: 0 auto;
  margin-left: 6rem;
  width: 85%;

  @media (max-width: 1300px) {
    width: 80%;
    height: 100vh;
  }
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  z-index: 1;
  margin-top: 6.25rem;
  margin-left: -2rem;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const HomeH1 = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #535353;
  text-decoration: underline;
  text-decoration-color: #FF944D;
  padding-bottom: 2rem;
  z-index: 1;

  @media (max-width: 1300px) {
    font-size: 45px;
  }

  @media (max-width: 820px) {
    font-size: 40px;
    padding-top: 4rem;
    padding-bottom: 5rem;
    margin: 0 auto;
  }
`;

export const HomeP1 = styled.p`
  font-size: 1rem;
  font-weight: light;
  margin-bottom: 2rem;
  color: #505050;
  line-height: 1.25rem;
  padding: 2.5rem 3rem 2.5rem 2rem;
  padding-right: 3rem;
  border-radius: 20px;
  background: #fff;
  z-index: 1;

  @media (max-width: 1300px) {
    width: 124%;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const HomeP = styled.p`
  font-size: 1rem;
  font-weight: light;
  margin-bottom: 2rem;
  color: #505050;
  line-height: 1.25rem;
  padding: 2.5rem 3rem 2.5rem 2rem;
  padding-right: 3rem;
  border-radius: 20px;
  background: #fff;
  z-index: 1;

  @media (max-width: 1300px) {
    width: 124%;
  }

  @media (max-width: 820px) {
    font-size: 0.5 rem;
    padding-top: 1rem;
    margin: 0 auto;
  }
`;

export const HomeImg = styled.img`
  height: 78vh;
  max-width: 100%;
  aling: right;
  margin-top: 1rem;
  margin-right: 5rem;
  z-index: 1;

  @media (max-width:1300px) {
    margin-top: 11rem;
    height: 50vh;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const HomeMiniItem = styled.div`
  flex-direction: column;
  justify-content: center;
  aling-items: flex-end;
  margin-top: 30px;
  margin-bottom: -30px;
  z-index: 1;
`;

export const DashMinimize = styled(CgLoadbar)`
  font-size: 2rem;
  color: #FF944D;
  z-index: 1;
`;

export const Dots = styled(HiDotsHorizontal)`
  font-size: 2rem;
  color: #E2E2E2;
  z-index: 1;
`;

export const HomeImg2 = styled.img`
  width: 50%;
  z-index: 0;
  margin-top: -62rem;
  transform: translate(0,-2%);

  @media (max-width: 820px) {
    width: 54%;
    margin-top: -36rem;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin-top: -36rem;
  }
  
`;