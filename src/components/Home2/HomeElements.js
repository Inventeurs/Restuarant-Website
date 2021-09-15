import styled from 'styled-components';
import {CgLoadbar} from 'react-icons/cg';
import {HiDotsHorizontal} from 'react-icons/hi';

/*import ImgBg from '../../images/pizza-3.jpg';

export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;*/

export const HomeContainer = styled.div`
  background: #fff;
  height: 100vh;
  z-index: 1;
`;


export const HomeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1;
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
  font-weight: bold;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeH1 = styled.h1`
  font-size: 60px;
  margin-bottom: 1rem;
  color: #535353;
  text-decoration: underline;
  text-decoration-color: #FF9F0D;
  padding-bottom: 2rem;
  z-index: 1;
`;

export const HomeP = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;
  color: #919191;
  line-height: 2rem;
  padding: 2rem;
  padding-right: 3rem;
  border-radius: 20px;
  background: #fff;
  box-shadow: .5rem .5rem 1rem  rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const HomeImg = styled.img`
  min-width: 500px;
  height: 500px;
  max-width: 100%;
  aling: right;
  margin-top: 1rem;
  margin-right: 5rem;
  z-index: 1;
`;

export const HomeMiniItem = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  z-index: 1;
`;

export const DashMinimize = styled(CgLoadbar)`
  font-size: 2rem;
  color: #FF9F0D;
  z-index: 1;
`;

export const Dots = styled(HiDotsHorizontal)`
  font-size: 2rem;
  color: #919191;
  z-index: 1;
`;

export const HomeImg2 = styled.img`
  width: 90%;
  margin-left: -650px;
  margin-top: -1100px;
  z-index: 0;
`;