import React, { useState } from 'react';
import {
  HomeContainer,
  HomeBlock,
  HomeItems,
  HomeH1,
  HomeImg,
  HomeImg2,
  HomeP,
  HomeMiniItem,
  DashMinimize,
  Dots
} from './HomeElements';
import food from '../../images/food.png';
import design2 from '../../images/design02.svg';

const Home = () => {

  return (
    <HomeContainer>
        <HomeBlock>
          <HomeImg src= {food} alt="Food" />
          <HomeItems>
            <HomeH1>About Us &nbsp; &nbsp;</HomeH1>
            <HomeP>We imagine a world where there’s no such thing as a bad cup of coffee and all coffee farmers live prosperously.<br/><br/>
            Our values include providing fair wages for workers, giving back to the communities we work with, and serving great food.<br/>
            <HomeMiniItem>
              <DashMinimize/>
              <Dots/>
            </HomeMiniItem>
            </HomeP>
          </HomeItems>
        </HomeBlock>
        <HomeImg2 src= {design2} alt="Design"/>
    </HomeContainer>
  );
};

export default Home;
