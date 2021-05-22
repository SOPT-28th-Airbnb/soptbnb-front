import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/img/soptbnb_color_logo.svg";
import LetterLogo from "../../assets/img/soptbnb_letter_logo.svg";
import Search from "./Search";
import HomeBannerImg from "../../assets/img/home_banner.jpeg";
import Ellipse from "../../assets/img/Ellipse.svg";
import userProfile from "../../assets/img/userProfile.svg";
import hamburgerIcon from "../../assets/img/hamburgerIcon.svg";

const MainHeaderWrap = styled.div`
  .main__top {
    width: 100%;
    height: 36px;
    background: #222222;
    display: block;
    text-align: center;
    &--Covid19 {
      line-height: 36px;
      font-weight: 500;
      letter-spacing: -0.05em;
      text-decoration-line: underline;
      color: #a3a3a3;
      cursor: pointer;
    }
  }

  .header {
    width: 100%;
    background-color: #000000;
    /* height: 515px; */
    &__top {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0px 100px;
    }
    &__left {
      flex: 1;
      display: flex;
      align-items: center;
      &--logo {
        margin-right: 5.39px;
      }
    }
    &__middle {
      flex: 1;
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      &--menu {
        //버튼
        all: unset;
        color: white;
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 13px;
        margin: 0px 10px;
        cursor: pointer;
      }
    }
    &__right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      &--hostBtn {
        color: white;
        margin-right: 14px;
      }
      &--icon {
        //아이콘이 이상하게 생김..
        margin-right: 14px;
      }
      &--user {
        width: 49px;
        height: 27px;
        background: #ffffff;
        border-radius: 21px;

        display: flex;
        justify-content: center;
        align-items: center;
        &--menu {
          width: 8.91px;
          margin-right: 7.18px;
        }
        &--icon {
          width: 20px;
          height: 20px;
        }
      }
    }
    &__bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &--Search {
        position: relative;
      }
      &--image {
        position: relative;
        top: -20.5px;
        z-index: 1;

        width: 90%;
        height: 372px;
        object-fit: cover;
        padding: 0px 0px 40px 0px;
      }
    }
  }
`;

const MainHeader = () => {
  const [btnIndex, setBtnIndex] = useState(0);
  const accommoBtnListener = () => {
    setBtnIndex(0);
  };
  const activBtnListener = () => {
    setBtnIndex(1);
  };

  return (
    <MainHeaderWrap>
      <div className="main__top">
        <a className="main__top--Covid19">
          에어비앤비의 코로나19대응 방안에 대한 최신 정보를 확인하세요.
        </a>
      </div>
      <div className="header">
        <div className="header__top">
          <div className="header__left">
            <img className="header__left--logo" src={Logo} />
            <img className="header__left--logo" src={LetterLogo} />
          </div>
          <div className="header__middle">
            <button
              className="header__middle--menu"
              onClick={accommoBtnListener}
            >
              숙소
            </button>
            <button className="header__middle--menu" onClick={activBtnListener}>
              체험
            </button>
            <button className="header__middle--menu">온라인 체험</button>
          </div>
          <div className="header__right">
            <p className="header__right--hostBtn">호스트 되기</p>
            <img className="header__right--icon" src={Ellipse}></img>
            <div className="header__right--user">
              <img className="header__right--user--menu" src={hamburgerIcon} />
              <img className="header__right--user--icon" src={userProfile} />
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <Search className="header__bottom--Search" index={btnIndex}></Search>
          <img className="header__bottom--image" src={HomeBannerImg}></img>
        </div>
      </div>
    </MainHeaderWrap>
  );
};

export default MainHeader;