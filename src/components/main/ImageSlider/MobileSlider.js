import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import styled from "styled-components";
SwiperCore.use([Pagination]);

const MobileSliderWrap = styled.div`
  width: 100%;
  margin-bottom: 3.8rem;
  .slider {
    margin-top: 1.6rem;
    width: 24.2rem;
    &__img {
      width: 24.2rem;
      height: 24.2rem;
      object-fit: cover;
      border-radius: 5px;
    }
    &__reside--desc {
      margin-top: 3px;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.9rem;
    }
    &__exp {
      &--type {
        margin-top: 5px;
        font-weight: 550;
        font-size: 1.2rem;
        line-height: 1.4rem;
      }
      &--desc {
        margin-top: 2px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2rem;
        letter-spacing: 0.03em;
      }
    }
  }
`;

const MobileSlider = ({ type, list }) => {
  console.log(list);
  const mySlidesPerView = (window.innerWidth / 290).toFixed(2);
  console.log(mySlidesPerView);

  return (
    <MobileSliderWrap>
      <Swiper autoHeight={true} slidesPerView={mySlidesPerView} freeMode={true}>
        {list.map((m) => {
          console.log(m);
          return (
            <SwiperSlide width="auto" key={m._id}>
              <div className="slider">
                <img className="slider__img" src={m.img} />
                {type == "reside" && (
                  <div className="slider__reside--desc">{m.desc}</div>
                )}
                {type == "exp" && (
                  <>
                    <div className="slider__exp--type">{m.type}</div>
                    <div className="slider__exp--desc">{m.desc}</div>
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
        {/* 
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </MobileSliderWrap>
  );
};

export default MobileSlider;
