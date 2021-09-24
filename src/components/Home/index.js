import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HomeContainer,
  HomeBlock,
  HomeItems,
  HomeImg,
  HomeP,
  HomeBtn
} from './HomeElements';
import food from '../../images/food.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <HomeBlock>
          <HomeItems>
            <HomeP>Your Favorite Food Delivered Hot & Fresh</HomeP>
            <HomeBtn>Order Now</HomeBtn>
          </HomeItems>
          <HomeImg src= {food} alt="Food" />  {/* responsive behaviour dkhna h iska */}
        </HomeBlock>
    </HomeContainer>
  );
};

export default Home;
