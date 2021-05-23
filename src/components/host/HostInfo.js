import React from "react";
import styled from "styled-components";

const HostInfoWrap = styled.div`
  width: 120rem;
  display: flex;

  .text {
    margin: 5.5rem 13.9rem 0 5.7rem;
    &__main {
      width: 42.2rem;
      font-weight: 600;
      font-size: 31px;
      line-height: 45px;
      letter-spacing: -0.01em;

      color: #373737;
    }
    &__sub {
      width: 40.2rem;
      margin: 0.9rem 0 13.5rem 0;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 165%;
      letter-spacing: -0.03em;
      color: #747474;
    }
  }
  .info {
    margin: 5.7rem 26.6rem 0 0;
    &__input {
      width: 31.4rem;
      border: 0.1rem solid #dddddd;
      border-radius: 0.5rem;
      &--email {
        margin: 0;
        padding: 0;
        width: 31.4rem;
        height: 4rem;
        background: #ffffff;
        border: none;
        border-radius: 0.5rem;
        ::placeholder {
          padding: 0.9rem;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 165%;
          letter-spacing: -0.03em;
          color: #747474;
        }
      }
      &--num {
        margin: 0;
        padding: 0;
        width: 31.4rem;
        height: 4rem;
        background: #ffffff;
        border: none;
        border-top: 0.1rem solid #dddddd;
        border-radius: 0 0 0.5rem 0.5rem;
        ::placeholder {
          padding: 0.9rem;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 165%;
          letter-spacing: -0.03em;
          color: #747474;
        }
      }
    }
    &__checkbox {
    }
  }
`;

const HostInfo = () => {
  return (
    <HostInfoWrap>
      <div className="text">
        <div className="text__main">
          전문성을 갖춘 호스트와 대화하며 더 자세한 정보를 얻으세요.
        </div>
        <div className="text__sub">
          호스팅에 대한 자세한 정보는 물론, 경험이 풍부한 호스트가 궁금증을
          해결해 드리는 실시간 웨비나 참여 기회에 대해서도 알려드리겠습니다.
        </div>
      </div>
      <div className="info">
        <div className="info__input">
          <input className="info__input--email" placeholder="이메일 주소" />
          <input
            className="info__input--num"
            placeholder="전화번호(선택 사항)"
          />
        </div>
        <div className="info__checkbox">
          <div className="info__checkbox--icon"></div>
          <div className="info__checkbox--text">
            호스팅에 대해 에어비앤비가 비정기적으로 보내는 데이터와 정보를 받고
            싶습니다. 언제든 이메일 구독을 취소할 수 있음을 알고 있습니다.
          </div>
        </div>
        <button className="info__btn">이메일 신청</button>
      </div>
    </HostInfoWrap>
  );
};

export default HostInfo;
