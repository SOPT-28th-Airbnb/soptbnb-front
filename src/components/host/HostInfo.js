import React, { useState } from "react";
import styled from "styled-components";
import icon from "../../assets/img/btn_checkbox_unselected.png";
import selectedIcon from "../../assets/img/btn_checkbox_selected.svg";
import CheckModal from "../host/CheckModal";

const HostInfoWrap = styled.div`
  width: 120rem;
  display: flex;
  background: #f7f7f7;
  border-bottom: 1px solid #dddddd;
  @media screen and (max-width: 500px) {
    width: 50rem;
    flex-direction: column;
  }

  .text {
    margin: 5.5rem 13.9rem 0 5.7rem;
    @media screen and (max-width: 500px) {
      margin: 2.1rem 0 0 2.8rem;
    }

    &__main {
      width: 42.2rem;
      font-weight: 600;
      font-size: 3.1rem;
      line-height: 4.5rem;
      letter-spacing: -0.01em;

      color: #373737;
      @media screen and (max-width: 500px) {
        width: 31.7rem;
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    }
    &__sub {
      width: 40.2rem;
      margin: 0.9rem 0 13.5rem 0;
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 165%;
      letter-spacing: -0.03em;
      color: #747474;
      @media screen and (max-width: 500px) {
        width: 32rem;
        margin: 2.1rem 0 5.4rem 0;
        line-height: 1.9rem;
      }
    }
  }
  .info {
    margin: 5.7rem 26.6rem 0 0;
    width: 31.4rem;
    @media screen and (max-width: 500px) {
      margin: 0 0 0 2.5rem;
    }
    &__input {
      width: 100%;
      border: 0.1rem solid #dddddd;
      border-radius: 0.5rem;
      &--email {
        padding: 0 0 0 0.9rem;
        margin: 0;
        width: 30.4rem;
        height: 4rem;
        background: #ffffff;
        border: none;
        border-radius: 0.5rem;
        ::placeholder {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 165%;
          letter-spacing: -0.03em;
          color: #747474;
        }
        :focus {
          outline: none;
        }
      }
      &--num {
        padding: 0 0 0 0.9rem;
        margin: 0;
        width: 30.4rem;
        height: 4rem;
        background: #ffffff;
        border: none;
        border-top: 0.1rem solid #dddddd;
        border-radius: 0 0 0.5rem 0.5rem;
        ::placeholder {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 165%;
          letter-spacing: -0.03em;
          color: #747474;
        }
        :focus {
          outline: none;
        }
      }
    }
    &__checkbox {
      display: flex;
      flex-direction: row;
      padding-top: 1.6rem;
      &--text {
        width: 28.7rem;
        margin-left: 1.2rem;
        font-style: normal;
        font-weight: 300;
        font-size: 0.9rem;
        line-height: 165%;
        letter-spacing: -0.09em;
        color: #747474;
      }
    }
    &__btn {
      width: 8.8rem;
      height: 3.6rem;
      margin-top: 1.8rem;
      background: #222222;
      border-radius: 0.6rem;
      border: none;
      font-style: normal;
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 165%;
      color: #ffffff;
      @media screen and (max-width: 500px) {
        margin-bottom: 6.4rem;
      }
    }
  }
`;
const Checkbox = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  background: url(${(props) => props.bg});
  border: none;
`;

const HostInfo = () => {
  const [checkState, setCheckState] = useState(false);
  const [dataState, setDataState] = useState({
    email: "",
    name: "",
    number: ""
  });
  const [modalState, setModalState] = useState(false);
  const postData = () => {
    if (!checkState) {
      alert("????????? ?????? ????????? ????????? ????????? ?????????????????? ??????????????????.");
    } else {
      if (dataState.name === "" || dataState.email === "") {
        alert("??? ?????? ????????? ?????? ??????????????? ????????? ???");
      } else {
        setModalState(true);
      }
    }
  };
  return (
    <HostInfoWrap>
      {modalState && (
        <CheckModal setModalState={setModalState} dataState={dataState} />
      )}
      <div className="text">
        <div className="text__main">
          ???????????? ?????? ???????????? ???????????? ??? ????????? ????????? ????????????.
        </div>
        <div className="text__sub">
          ???????????? ?????? ????????? ????????? ??????, ????????? ????????? ???????????? ????????????
          ????????? ????????? ????????? ????????? ?????? ????????? ???????????? ????????????????????????.
        </div>
      </div>
      <div className="info">
        <div className="info__input">
          <input
            className="info__input--email"
            placeholder="??????"
            onChange={(e) =>
              setDataState({
                ...dataState,
                name: e.target.value
              })
            }
          />
          <input
            className="info__input--num"
            placeholder="????????? ??????"
            onChange={(e) =>
              setDataState({
                ...dataState,
                email: e.target.value
              })
            }
          />
          <input
            className="info__input--num"
            placeholder="????????????(?????? ??????)"
            onChange={(e) =>
              setDataState({
                ...dataState,
                number: e.target.value
              })
            }
          />
        </div>
        <div className="info__checkbox">
          <Checkbox
            bg={checkState ? selectedIcon : icon}
            active={selectedIcon}
            checkState={checkState}
            onClick={() => {
              checkState ? setCheckState(false) : setCheckState(true);
            }}
          />
          <div className="info__checkbox--text">
            ???????????? ?????? ?????????????????? ?????????????????? ????????? ???????????? ????????? ??????
            ????????????. ????????? ????????? ????????? ????????? ??? ????????? ?????? ????????????.
          </div>
        </div>
        <button className="info__btn" onClick={postData}>
          ????????? ??????
        </button>
      </div>
    </HostInfoWrap>
  );
};

export default HostInfo;
