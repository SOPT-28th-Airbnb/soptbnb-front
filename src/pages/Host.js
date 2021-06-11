<<<<<<< HEAD
=======
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import HeaderImg from "../assets/img/img_main_01.webp";
import symbolImg from "../assets/img/ic_symbol_soptbnb.svg";
import logoImg from "../assets/img/ic_soptbnb.svg";
import reviewCardImg from "../assets/img/img_medium.jpeg";
import HeaderImg2 from "../assets/img/img_main_02.webp";
import Footer from "../components/common/Footer";
import HostInfo from "../components/host/HostInfo";
import ImageSlider from "../components/host/ImageSlider";
import TextPC from "../components/host/TextPC";
import TextMobile from "../components/host/TextMobile";
import SupportTextMobile from "../components/host/SupportTextMobile";
import SupportTextPC from "../components/host/SupportTextPC";

const Header = styled.div`
  width: 120rem;
  height: 38.6rem;
  background: url(${(props) => props.bg}) no-repeat center center;
  .title {
    display: flex;
    position: relative;
    top: 5.2rem;
    left: 10rem;
    &__symbol {
      width: 1.8rem;
    }
    &__logo {
      width: 5.3rem;
    }
  }
  .text {
    position: relative;
    top: 9.7rem;
    left: 5.6rem;
    color: #ffffff;
    width: 55.7rem;

    &__top {
      font-size: 1.4rem;
      line-height: 2.2rem;
      width: 10rem;
    }
    &__middle {
      font-weight: 600;
      font-size: 4.1rem;
      line-height: 130%;
      font-style: normal;
      letter-spacing: -0.02em;
    }
    &__bottom {
      width: 41.6rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  .startBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 13.1rem;
    left: 5.5rem;
    width: 9.4rem;
    height: 4.2rem;
    background: #ff395c;
    border-radius: 0.6rem;

    font-weight: 300;
    font-size: 1.2rem;
    color: white;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 64.8rem;
    .title {
      display: none;
    }
    .text {
      position: relative;
      top: 28.8rem;
      left: 2.5rem;
      width: 45.6rem;
      &__middle {
        width: 45.6rem;
      }
      &__bottom {
        width: 41.6rem;
      }
    }
    .startBtn {
      position: absolute;
      top: 48.8rem;
      left: 2.4rem;
    }
  }
`;
const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 9.9rem;
  .reviewImg {
    width: 54.3rem;
    height: 33.6rem;
    border-radius: 1rem 0rem 0rem 1rem;
  }
  .reviewText {
    background: #f7f7f7;
    border-radius: 0rem 1rem 1rem 0rem;
    &__title {
      width: 45.5rem;
      margin: 3.5rem 5rem 2.4rem 3.3rem;
      font-weight: 600;
      font-size: 2.9rem;
      line-height: 3.9rem;
      letter-spacing: -0.03em;

      color: #373737;
    }
    &__subTitle {
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.3rem;
      letter-spacing: -0.05em;
      margin: 0 5rem 11.4rem 3.7rem;

      color: #747474;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 5rem;
    margin-left: 2.4rem;
    .reviewImg {
      width: 45.1rem;
      height: 16.3rem;
      border-radius: 1rem 1rem 0rem 0rem;
      object-fit: cover;
    }
    .reviewText {
      width: 45.1rem;
      background: #f7f7f7;
      border-radius: 0rem 0rem 1rem 1rem;
      &__title {
        width: 40.7rem;
        margin: 2rem 2.2rem 1.2rem 2.2rem;
        font-weight: 600;
        font-size: 1.7rem;
        line-height: 2.3rem;
      }
      &__subTitle {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 2rem;
        margin: 0 0 1.7rem 2.2rem;

        color: #747474;
      }
    }
  }
`;
const ImgSliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.8rem;
  margin-bottom: 8.4em;
  @media screen and (max-width: 500px) {
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }
  .title {
    width: 108.6rem;
    font-weight: 600;
    font-size: 2.9rem;
    line-height: 3.9rem;
    letter-spacing: -0.03em;

    color: #373737;
    @media screen and (max-width: 500px) {
      width: 45.1rem;
    }
  }
`;
const Banner = styled.div`
  width: 120rem;
  height: 38.6rem;
  background: url(${(props) => props.bg}) no-repeat center center;
  background-size: cover;
  .text {
    position: relative;
    top: 13.2rem;
    left: 5.5rem;
    color: #ffffff;

    &__middle {
      font-weight: 600;
      font-size: 2.9rem;
      line-height: 130%;
      font-style: normal;
      letter-spacing: -0.02em;
    }
    &__bottom {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2.2rem;
      letter-spacing: -0.04em;
    }
  }
  .startBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0rem;
    left: 5.5rem;
    width: 9.4rem;
    height: 4.2rem;
    background: #ff395c;
    border-radius: 0.6rem;

    font-weight: 300;
    font-size: 1.2rem;
    color: white;
  }
  @media screen and (max-width: 500px) {
    width: 50rem;
    height: 34.7rem;
    .text {
      position: relative;
      top: 11rem;
      left: 2.4rem;
      width: 27.9rem;
    }
    .startBtn {
      position: relative;
      top: 12.6rem;
      left: 2.4rem;
    }
  }
`;
function Host() {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return (
    <>
      <Header bg={HeaderImg}>
        <div className="title">
          <img className="title__symbol" src={symbolImg} alt="" />
          <img className="title__logo" src={logoImg} alt="" />
        </div>
        <div className="text">
          <div className="text__top">호스팅 시작하기</div>
          <div className="text__middle">공간을 나누고 새로운 세상을 얻다</div>
          <div className="text__bottom">
            에어비앤비 호스트가 되면 남는 공간을 활용해 부수입을 올리고 진짜
            하고 싶은 일에 매진할 수 있습니다.
          </div>
        </div>
        <div className="startBtn">시작하기</div>
      </Header>
      {isMobile ? <TextMobile /> : <TextPC />}
      <ReviewCard>
        <img className="reviewImg" src={reviewCardImg} alt="" />
        <div className="reviewText">
          <div className="reviewText__title">
            호스팅 덕분에 창의력을 마음껏 발산하고 가족과 더 많은 시간을 보낼 수
            있게 되었어요.
          </div>
          <div className="reviewText__subTitle">
            대럴님
            <br />
            조지아주 애틀랜타의 호스트
          </div>
        </div>
      </ReviewCard>
      <ImgSliderWrap>
        <div className="title">호스팅에 대해 알아보기</div>
        <ImageSlider />
      </ImgSliderWrap>
      {isMobile ? <SupportTextMobile /> : <SupportTextPC />}
      <Banner style={{ marginTop: "4.5rem" }} bg={HeaderImg2}>
        <div className="text">
          <div className="text__middle">호스팅 시작하기</div>
          <div className="text__bottom">
            숙소를 등록해 보세요. 에어비앤비가 도와드립니다.
          </div>
        </div>
        <div className="startBtn">시작하기</div>
      </Banner>
      <HostInfo />
      <Footer />
    </>
  );
}

export default Host;
>>>>>>> develop
