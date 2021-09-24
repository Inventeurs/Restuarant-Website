import React from "react";
import Slider from "react-slick";
import { ReviewContainer, ReviewHeading, ReviewWrapper, ReviewCard, ReviewImg, ReviewInfo, ReviewMiniItem1, ReviewMiniItem2, ReviewTitle, ReviewDesc, ReviewDate, ReviewData } from './ReviewElements';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowleft from '../../images/arrowleft.svg';
import arrowright from '../../images/arrowright.svg';
import './review.css';

function NextArrow2 (props)  {
  const { className, style, onClick } = props;
  return (
          <img src= {arrowleft} alt="ArrowNext" onClick={onClick} className= {className}
          style={{ ...style, display:"flex",top:"45%" }} z-index="999" />
  );
}

function PrevArrow2 (props)  {
  const { className, style, onClick } = props;
  return (
          <img src= {arrowright} alt="ArrowNext" onClick={onClick} className= {className}
          style={{ ...style, display:"flex",top:"45%" }} z-index="999" />
  );
}

const Review = ({data}) => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      nextArrow: <NextArrow2 />,
      prevArrow: <PrevArrow2 />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrow: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrow: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false
          }
        }
      ]
      };
    return (
      <ReviewContainer>
        <ReviewHeading>Reviews</ReviewHeading>
        <Slider {...settings}>
            {data.map((review, index) => {
              return (
                <ReviewWrapper>
                  <ReviewCard key={index}>
                    <ReviewInfo>
                      <ReviewImg src={review.img} alt={review.alt} />
                      <ReviewMiniItem1>
                        <ReviewTitle>{review.name}</ReviewTitle>
                        <ReviewDesc>{review.desc}</ReviewDesc>
                      </ReviewMiniItem1>
                    </ReviewInfo>
                    <ReviewMiniItem2>
                      <ReviewDate>{review.date}</ReviewDate>
                      <ReviewData>{review.review}</ReviewData>
                    </ReviewMiniItem2>
                  </ReviewCard>
                </ReviewWrapper>
              );
            })}
        </Slider>
        </ReviewContainer>
    );
}

export default Review;
