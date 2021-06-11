import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/img/soptbnb_color_logo.svg";
import LetterLogo from "../../assets/img/soptbnb_letter_logo.svg";
import Search from "./Search";
import HomeBannerImg from "../../assets/img/home_banner.jpeg";
import Ellipse from "../../assets/img/Ellipse.svg";
import userProfile from "../../assets/img/userProfile.svg";
import hamburgerIcon from "../../assets/img/hamburgerIcon.svg";
import { withRouter, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import search_icon from "../../assets/img/search_icon.svg";

const MainHeaderWrap = styled.div`
  .main__top {
    width: 100%;
    height: 3.6rem;
    background: #222222;
    display: block;
    text-align: center;
    &--Covid19 {
      font-size: 8px;
      line-height: 3.6rem;
      font-weight: 500;
      letter-spacing: -0.05rem;
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
      height: 5rem;
      display: flex;
      align-items: center;
      padding: 0px 10rem;
    }
    &__left {
      flex: 1;
      display: flex;
      align-items: center;
      &--logo {
        margin-right: 0.539rem;
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
        line-height: 1.3rem;
        margin: 0 1rem;
        cursor: pointer;
      }
    }
    &__right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &--hostBtn {
        color: white;
        margin-right: 1.4rem;
        cursor: pointer;
      }
      &--icon {
        //아이콘이 이상하게 생김..
        margin-right: 1.4rem;
      }
      &--user {
        width: 4.9rem;
        height: 2.7rem;
        background: #ffffff;
        border-radius: 2.1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        &--menu {
          width: 0.891rem;
          margin-right: 0.718rem;
        }
        &--icon {
          width: 2rem;
          height: 2rem;
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
        top: -2.05rem;
        z-index: 1;

        width: 106rem;
        height: 37.2rem;
        object-fit: cover;
        padding: 0 0 3rem 0;
      }
    }
  }
`;

const MobileHeaderWrap = styled.div`
  .mobilemain {
    width: 100vw;
    &__covid19 {
      background: #f7f7f7;
      font-size: 1rem;
      text-align: center;
      line-height: 3.8rem;
      text-decoration-line: underline;
      color: #000000;
      cursor: pointer;
      letter-spacing: -0.05em;
    }
    &__search {
      width: 100vw-48px;
      margin: 11px 24px 11px 24px;
      height: 3.4rem;
      background: #ffffff;
      box-shadow: 0px 5px 4px rgba(180, 180, 180, 0.25);
      border-radius: 30px;
      display: flex;
      align-items: center;

      &--icon {
        width: 13.91px;
        height: 11px;
        margin: 0 19.5px;
      }
      &--question {
        font-size: 1.2rem;
      }
    }
    &__image {
      width: 100vw;
      height: 48.7rem;
      object-fit: cover;
    }
  }
`;

const MainHeader = ({ history }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [btnIndex, setBtnIndex] = useState(0);
  const accommoBtnListener = () => {
    setBtnIndex(0);
  };
  const activBtnListener = () => {
    setBtnIndex(1);
  };

  const HostBtnHandler = () => {
    history.push("/host");
  };

  return isMobile ? (
    <MobileHeaderWrap>
      <div className="mobilemain">
        <Link to="/">
          <div className="mobilemain__covid19">
            에어비앤비의 코로나19대응 방안에 대한 최신 정보를 확인하세요.
          </div>
        </Link>
        <div className="mobilemain__search">
          <img src={search_icon} alt="" className="mobilemain__search--icon" />
          <div className="mobilemain__search--question">어디로 여행가세요?</div>
        </div>
        <img className="mobilemain__image" src={HomeBannerImg} alt=""></img>
      </div>
    </MobileHeaderWrap>
  ) : (
    <MainHeaderWrap>
      <div className="main__top">
        <Link to="/">
          <div className="main__top--Covid19">
            에어비앤비의 코로나19대응 방안에 대한 최신 정보를 확인하세요.
          </div>
        </Link>
      </div>
      <div className="header">
        <div className="header__top">
          <div className="header__left">
            <img className="header__left--logo" src={Logo} alt="" />
            <img className="header__left--logo" src={LetterLogo} alt="" />
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
            <p className="header__right--hostBtn" onClick={HostBtnHandler}>
              호스트 되기
            </p>
            <img className="header__right--icon" src={Ellipse} alt="" />
            <div className="header__right--user">
              <img
                className="header__right--user--menu"
                src={hamburgerIcon}
                alt=""
              />
              <img
                className="header__right--user--icon"
                src={userProfile}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <Search
            className="header__bottom--Search"
            index={btnIndex}
            alt=""
          ></Search>
          <img className="header__bottom--image" src={HomeBannerImg} alt="" />
        </div>
      </div>
    </MainHeaderWrap>
  );
};

export default withRouter(MainHeader);
