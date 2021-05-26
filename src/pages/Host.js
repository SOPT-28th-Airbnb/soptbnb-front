import React from "react";
import styled from "styled-components";
import HeaderImg from "../assets/img/img_main_01.webp";
import symbolImg from "../assets/img/ic_symbol_soptbnb.svg";
import logoImg from "../assets/img/ic_soptbnb.svg";
import reviewCardImg from "../assets/img/img_medium.jpeg";
import HeaderImg2 from "../assets/img/img_main_02.webp";
import Footer from "../components/common/Footer";
import HostInfo from "../components/host/HostInfo";
import ImageSlider from "../components/host/ImageSlider";

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
    /* font-family: "Noto Sans"; */

    color: #ffffff;
    &__top {
      font-size: 1.4rem;
      line-height: 2.2rem;
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
`;
const TextfieldWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .mainTitle {
    margin-left: 5.7rem;
    margin-top: 8.3rem;
    font-weight: 600;
    font-size: 3.1rem;
    line-height: 4.5rem;
    color: #373737;
  }
  .text {
    padding-top: 8.7rem;
    padding-left: 14.3rem;
    width: 23rem;
    &__top {
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.3rem;

      color: #373737;
    }
    &__middle {
      margin-top: 1.9rem;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 165%;
      color: #747474;
    }
    &__bottom {
      margin-top: 1.9rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: #373737;
      text-decoration: underline;
      /* border-bottom: 1px solid #373737; */
    }
  }
  .supportTitle {
    width: 108.6rem;
    font-weight: 600;
    font-size: 2.9rem;
    line-height: 3.9rem;
    letter-spacing: -0.03em;
    color: #373737;
  }
  .supportInfo {
    display: flex;
    flex-direction: row;
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
`;
const ImgSliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.8rem;
  margin-bottom: 8.4em;
  .title {
    width: 108.6rem;
    font-weight: 600;
    font-size: 2.9rem;
    line-height: 3.9rem;
    letter-spacing: -0.03em;

    color: #373737;
  }
`;
function Host() {
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
      <TextfieldWrap>
        <div className="mainTitle">
          내 인생의 새로운 시작, <br />
          호스트가 되면 가능합니다.
        </div>
        <div className="text">
          <div className="text__top">새로운 가능성이 열립니다</div>
          <div className="text__middle">
            호스팅을 통해 내가 원하는 시간에 유연하게 일하면서 부수입을 올리고
            전 세계 사람들을 만나세요.
          </div>
          <div className="text__bottom">호스팅에 대해 알아보기</div>
        </div>
        <div className="text">
          <div className="text__top">안심할 수 있는 호스팅</div>
          <div className="text__middle">
            연중무휴 지원, 호스트 커뮤니티, 호스트를 위한 맞춤 도구와 데이터
            분석, 교육 등 에어비앤비는 다방면으로 호스트의 성공을 지원합니다.
          </div>
          <div className="text__bottom">에어비앤비의 호스트 지원 방법</div>
        </div>
      </TextfieldWrap>
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
      <TextfieldWrap style={{ flexDirection: "column" }}>
        <div className="supportTitle">애어비앤비의 호스트 지원</div>
        <div className="supportInfo">
          <div
            className="text"
            style={{ paddingLeft: 0, paddingTop: "2.4rem", width: "27.2rem" }}
          >
            <div className="text__top">호스트를 보호하는 다양한 프로그램</div>
            <div className="text__middle">
              혹시라도 사고가 발생하는 경우에 대비하여, 대부분의 에어비앤비
              예약에는 미화 최대 1백만 달러의 재산 피해 보호 및 책임배상보험이
              포함됩니다.
            </div>
            <div className="text__bottom">에어비앤비의 호스트 보호 장치</div>
          </div>
          <div
            className="text"
            style={{
              paddingLeft: "13.5rem",
              paddingTop: "2.4rem",
              width: "27.2rem"
            }}
          >
            <div className="text__top">코로나19 방역을 위한 안전 수칙</div>
            <div className="text__middle">
              커뮤니티의 건강과 안전을 위해 전문가와 협력하여 방역 수칙과
              호스트에게 도움이 될 청소 절차를 마련했습니다.
            </div>
            <div className="text__bottom">강화된 청소 절차 알아보기</div>
          </div>
          <div
            className="text"
            style={{
              paddingLeft: "13.5rem",
              paddingTop: "2.4rem",
              width: "27.2rem"
            }}
          >
            <div className="text__top">높은 게스트 기준</div>
            <div className="text__middle">
              호스트는 예약 확정 전에 게스트 신원과 게스트에 대한 후기를 확인할
              수 있으므로 안심하고 예약을 받을 수 있습니다. 에어비앤비는 새로운
              게스트 기준 정책을 통해 게스트가 지켜야 할 사항을 명확히 규정하고
              있습니다.
            </div>
            <div className="text__bottom">
              안심 호스팅을 위한 에어비앤비의 정책과 기능
            </div>
          </div>
        </div>
      </TextfieldWrap>
      <Header style={{ marginTop: "4.5rem" }} bg={HeaderImg2}>
        <div className="text">
          <div className="text__middle">호스팅 시작하기</div>
          <div className="text__bottom">
            숙소를 등록해 보세요. 에어비앤비가 도와드립니다.
          </div>
        </div>
        <div className="startBtn">시작하기</div>
      </Header>
      <HostInfo />
      <Footer />
    </>
  );
}

export default Host;
