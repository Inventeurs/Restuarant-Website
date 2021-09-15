import React, { useState } from 'react';
import Navbar from '../Navbar';
import {
  HomeContainer,
  HomeContent,
  HomeBlock,
  HomeItems,
  HomeImg,
  HomeP,
  HomeBtn
} from './HomeElements';
import food from '../../images/food.png';

const Home = () => {

  return (
    <HomeContainer>
      <Navbar/>
      <HomeContent>
        <HomeBlock>
          <HomeItems>
            <HomeP>Your Favorite Food Delivered Hot & Fresh</HomeP>
            <HomeBtn>Order Now</HomeBtn>
          </HomeItems>
          <HomeImg src= {food} alt="Food" />
        </HomeBlock>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
