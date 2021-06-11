import React from "react";
import styled from "styled-components";
import { postHostInfo } from "../../lib/api";

const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50rem;
    height: 30rem;
    background: #ffffff;
    border-radius: 5rem;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 3rem;
      line-height: 45px;
      letter-spacing: -0.01em;
      color: #373737;
    }
    .content {
      display: flex;
      flex-direction: column;
      width: 25rem;
      margin-top: 2rem;
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 3.5rem;
      letter-spacing: -0.01em;
      color: #747474;
      &__div {
        display: flex;
      }
      &__text {
        min-width: 9rem;
      }
    }
    .button {
      display: flex;
      flex: row;
      margin-top: 2.5rem;
      &__yes {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.8rem;
        height: 3.6rem;
        background: #ff395c;
        border-radius: 0.6rem;
        border: none;
        font-style: normal;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 165%;
        color: #ffffff;
      }
      &__no {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.8rem;
        height: 3.6rem;
        margin-left: 5rem;
        background: #222222;
        border-radius: 0.6rem;
        border: none;
        font-style: normal;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 165%;
        color: #ffffff;
      }
    }
  }
`;
const CheckModal = ({ setModalState, dataState }) => {
  return (
    <ModalWrap>
      <div className="box">
        <div className="title">입력하신 정보가 맞나요?</div>
        <div class="content">
          <div className="content__div">
            <div className="content__text">이름: </div>
            <div className="content__text">{dataState.name}</div>
          </div>
          <div className="content__div">
            <div className="content__text">이메일: </div>
            <div className="content__text">{dataState.email}</div>
          </div>
          <div className="content__div">
            <div className="content__text">전화번호: </div>
            <div className="content__text">{dataState.number}</div>
          </div>
        </div>
        <div className="button">
          <div
            className="button__yes"
            onClick={() => {
              setModalState(false);
              postHostInfo(dataState);
            }}
          >
            네
          </div>
          <div
            className="button__no"
            onClick={() => {
              setModalState(false);
            }}
          >
            아니오
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default CheckModal;
