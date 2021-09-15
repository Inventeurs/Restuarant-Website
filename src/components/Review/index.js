import React from "react";
import Slider from "react-slick";
import { ReviewContainer, ReviewHeading, ReviewWrapper, ReviewCard, ReviewImg, ReviewInfo, ReviewMiniItem1, ReviewMiniItem2, ReviewTitle, ReviewDesc, ReviewDate, ReviewData } from './ReviewElements';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewElements.css';

const Review = ({data}) => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 0.5
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
