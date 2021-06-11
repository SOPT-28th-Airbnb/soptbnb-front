import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import list1 from "../../assets/img/img_list_01.svg";
import list2 from "../../assets/img/img_list_02.svg";
import list3 from "../../assets/img/img_list_03.svg";
import list4 from "../../assets/img/img_list_04.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import mobileBtn from "../../assets/img/btn_search.svg";

const LeftArrowWrap = styled.div`
  padding: 1rem;
  z-index: 5;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const LeftArrow = ({ handleBtnClick }) => {
  return (
    <LeftArrowWrap onClick={handleBtnClick}>
      <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
    </LeftArrowWrap>
  );
};
const RightArrowWrap = styled.div`
  padding: 1rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const RightArrow = ({ handleBtnClick }) => {
  return (
    <RightArrowWrap onClick={handleBtnClick}>
      <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
    </RightArrowWrap>
  );
};
const MobileArrowWrap = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  top: -16rem;
  right: -20rem;
  background: url(${mobileBtn});
`;
const MobileBtn = ({ handleBtnClick }) => {
  return <MobileArrowWrap onClick={handleBtnClick}></MobileArrowWrap>;
};

const Container = styled.div`
  max-width: 108.6rem;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    max-width: 45.1rem;
  }
`;
const ImageSliderWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.4rem;
`;
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2.8rem;
  @media screen and (max-width: 500px) {
    padding-right: 1.8rem;
  }
  .slider__img {
    width: 28.2rem;
    height: 17.6rem;
    background: url(${(props) => props.bg}) no-repeat top center;
  }
  .slider__title {
    padding-top: 1.2rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -0.07em;
    color: #373737;
  }
  .slider__subtitle {
    padding-top: 1.1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: -0.055em;
    color: #505050;
  }
`;
const ImageSliderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const ImageSlider = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    //이미지 크기만큼 x축으로 이동
    slideRef.current.style.transform = `translateX(-${currentSlide * 31}rem)`;
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide >= 3) {
      console.log("4");
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      console.log("1");
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <ImageSliderDiv>
      <LeftArrow handleBtnClick={handlePrev} />
      <Container>
        <ImageSliderWrap ref={slideRef}>
          <SliderItem bg={list1}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">
              에어비앤비 호스팅을 추천하는 이유
            </div>
            <div className="slider__subtitle">
              에어비엔비에서 숙소를 공유하는 것의 장점에 대해 호스트에게 직접
              들어보세요.
            </div>
          </SliderItem>
          <SliderItem bg={list2}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">에어비앤비 호스팅 시작하기</div>
            <div className="slider__subtitle">
              숙소 등록부터 게스트 맞이를 위한 숙소 준비 방법까지, 호스팅 시작
              방법을 확인해 보세요.
            </div>
          </SliderItem>
          <SliderItem bg={list3}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">
              에어비앤비에서 호스팅 수입을 올리는 법
            </div>
            <div className="slider__subtitle">
              요금 설정과 대금 수령에 관해 자세히 알아보세요.
            </div>
          </SliderItem>
          <SliderItem bg={list4}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">
              에어비앤비 호스팅에 적합한 숙소란?
            </div>
            <div className="slider__subtitle">
              어떤 숙소이건 그 숙소를 좋아할 게스트가 있기 마련입니다. 다만
              게스트 기대치를 적절한 수준으로 설정할 필요가 있습니다.
            </div>
          </SliderItem>
          <SliderItem bg={list1}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">
              에어비앤비 호스팅을 추천하는 이유
            </div>
            <div className="slider__subtitle">
              에어비엔비에서 숙소를 공유하는 것의 장점에 대해 호스트에게 직접
              들어보세요.
            </div>
          </SliderItem>
          <SliderItem bg={list2}>
            <div className="slider__img" alt=""></div>
            <div className="slider__title">에어비앤비 호스팅 시작하기</div>
            <div className="slider__subtitle">
              숙소 등록부터 게스트 맞이를 위한 숙소 준비 방법까지, 호스팅 시작
              방법을 확인해 보세요.
            </div>
          </SliderItem>
        </ImageSliderWrap>
      </Container>
      <RightArrow handleBtnClick={handleNext} />
      {isMobile ? <MobileBtn handleBtnClick={handleNext} /> : ""}
    </ImageSliderDiv>
  );
};

export default ImageSlider;
