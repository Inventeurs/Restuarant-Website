import React from "react";
import Slider from "react-slick";
import { MenuContainer, MenuWrapper, MenuCard, MenuImg, MenuImg2, MenuImg3 ,MenuInfo, MenuMiniItem1,MenuTitle, MenuPrice, MenuDesc, Dots} from './menuElements';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menubar from '../Menubar';
import ToggleSwitch from '../ToggleSwitch';
import DropDown from '../Dropdown';
import cart from '../../images/cart.svg';
import arrowleft from '../../images/arrowleftM.svg';
import arrowright from '../../images/arrowrightM.svg';
import './menu.css';

function NextArrow (props)  {
  const { className, style, onClick } = props;
  return (
          <img src= {arrowleft} alt="ArrowNext" onClick={onClick} className= {className}
          style={{ ...style, left: "43%", display:"flex"}} z-index="999" />
  );
}

function PrevArrow (props)  {
  const { className, style, onClick } = props;
  return (
          <img src= {arrowright} alt="ArrowNext" onClick={onClick} className= {className}
          style={{ ...style, left: "51%", display:"flex" }} z-index="999" />
  );
}

const Menu = ({data}) => {
    var settings = {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows: 1,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
      };
    return (
      <MenuContainer>
        <Menubar/>
        <DropDown />
        <ToggleSwitch />
        <Slider {...settings}>
            {data.map((menu, index) => {
              return (
                <MenuWrapper>
                  <MenuCard key={index}>
                   <Dots/>
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
