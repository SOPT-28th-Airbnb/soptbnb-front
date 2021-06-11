import React from "react";
import styled from "styled-components";

const TextfieldWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .mainTitle {
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
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    .mainTitle {
      margin-left: 2.4rem;
      margin-top: 3.1rem;
    }
    .text {
      padding-top: 4rem;
      padding-left: 2.4rem;
      width: 23rem;
    }
    .supportTitle {
      width: 100vw;
    }
    .supportInfo {
      display: flex;
      flex-direction: column;
    }
  }
`;

const TextPC = () => {
  return (
    <TextfieldWrap>
      <div className="mainTitle">
        내 인생의 새로운 시작, <br />
        호스트가 되면 가능합니다.
      </div>
      <div className="text">
        <div className="text__top">새로운 가능성이 열립니다</div>
        <div className="text__middle">
          호스팅을 통해 내가 원하는 시간에 유연하게 일하면서 부수입을 올리고 전
          세계 사람들을 만나세요.
        </div>
        <div className="text__bottom">호스팅에 대해 알아보기</div>
      </div>
      <div className="text">
        <div className="text__top">안심할 수 있는 호스팅</div>
        <div className="text__middle">
          연중무휴 지원, 호스트 커뮤니티, 호스트를 위한 맞춤 도구와 데이터 분석,
          교육 등 에어비앤비는 다방면으로 호스트의 성공을 지원합니다.
        </div>
        <div className="text__bottom">에어비앤비의 호스트 지원 방법</div>
      </div>
    </TextfieldWrap>
  );
};

export default TextPC;
