import React from "react";
import styled from "styled-components";

const TextfieldWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  width: 100vw;
  .mainTitle {
    margin-top: 8.3rem;
    font-weight: 600;
    font-size: 3.1rem;
    line-height: 4.5rem;
    margin-left: 2.4rem;
    margin-top: 3.1rem;
    color: #373737;
  }
  .text {
    padding-top: 8.7rem;
    padding-left: 14.3rem;
    width: 23rem;
    padding-top: 4rem;
    padding-left: 2.4rem;
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
    width: 100vw;
  }
  .supportInfo {
    display: flex;
    flex-direction: row;
    display: flex;
    flex-direction: column;
  }
`;

const SupportTextMobile = () => {
  return (
    <TextfieldWrap style={{ flexDirection: "column" }}>
      <div className="supportTitle">애어비앤비의 호스트 지원</div>
      <div className="supportInfo">
        <div
          className="text"
          style={{
            paddingLeft: 0,
            paddingTop: "2.4rem",
            width: "27.2rem"
          }}
        >
          <div className="text__top">호스트를 보호하는 다양한 프로그램</div>
          <div className="text__middle">
            혹시라도 사고가 발생하는 경우에 대비하여, 대부분의 에어비앤비
            예약에는 미화 최대 1백만 달러의 재산 피해 보호 및 책임배상보험이
            포함됩니다.
          </div>
          <div className="text__bottom">에어비앤비의 호스트 보호 장치</div>
        </div>
        {/* <div
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
        </div> */}
        {/* <div
          className="text"
          style={{
            paddingLeft: "13.5rem",
            paddingTop: "2.4rem",
            width: "27.2rem"
          }}
        >
          <div className="text__top">높은 게스트 기준</div>
          <div className="text__middle">
            호스트는 예약 확정 전에 게스트 신원과 게스트에 대한 후기를 확인할 수
            있으므로 안심하고 예약을 받을 수 있습니다. 에어비앤비는 새로운
            게스트 기준 정책을 통해 게스트가 지켜야 할 사항을 명확히 규정하고
            있습니다.
          </div>
          <div className="text__bottom">
            안심 호스팅을 위한 에어비앤비의 정책과 기능
          </div>
        </div> */}
      </div>
    </TextfieldWrap>
  );
};

export default SupportTextMobile;
