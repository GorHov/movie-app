import React from 'react';
import Slider from 'react-slick';
import './TrendingNowCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingNowCarousel = ({ data, onSelectVideo }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8, 
    slidesToScroll: 2, 
    initialSlide: 0, 
    arrows: false
  };

  return (
    <div className="slider-container">
      <p>Trending Now</p>
      <Slider {...settings}>
        {data?.map((video,index) => (
          <img
          key={index}
          onClick={() => onSelectVideo(video)}
          className="video-cover"
          src={'images/' + video.CoverImage}
          alt={video.title}
        />
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNowCarousel;
