import React from "react";
import Slider from "react-slick";
import { MenuContainer, MenuWrapper, MenuCard, MenuImg, MenuImg2, MenuImg3 ,MenuInfo, MenuMiniItem1,MenuTitle, MenuPrice, MenuDesc} from './menuElements';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menubar from '../Menubar';
import ToggleSwitch from '../ToggleSwitch';
import './menuElements.css';
import cart from '../../images/cart.svg';

const Menu = ({data}) => {
    var settings = {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2
      };
    return (
      <MenuContainer>
        <Menubar/>
        <ToggleSwitch />
        <Slider {...settings}>
            {data.map((menu, index) => {
              return (
                <MenuWrapper>
                  <MenuCard key={index}>
                    <MenuInfo>
                      <MenuImg2 src={menu.img2} alt={menu.alt2} />
                      <MenuMiniItem1>
                        <MenuTitle>{menu.name}</MenuTitle>
                        <MenuPrice>{menu.price}</MenuPrice>
                        <MenuDesc>{menu.desc}</MenuDesc>
                      </MenuMiniItem1>
                    </MenuInfo>
                    <MenuImg src={menu.img} alt={menu.alt} />
                    <MenuImg3 src={cart} alt= 'carticon' />
                  </MenuCard>
                </MenuWrapper>
              );
            })}
        </Slider>
      </MenuContainer>
    );
}

export default Menu;
