import React from "react";
import styled from "styled-components";
import searchBtn from "../../assets/img/searchBtn.svg";

const DetailedSearchWrap = styled.div`
  z-index: 2;
  width: 53.1rem;
  height: 41px;
  border-radius: 3.35rem;
  background-color: #ffffff;
`;

const EachSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0.5rem 0px 2rem;
  height: 41px;
  .search__part {
    &--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &--title {
      font-weight: 500;
      font-size: 0.8rem;
      margin: 0;
      /* line-height: 0.9rem; */
      /* padding: 0 0 0.2rem 0; */
    }
    &--input {
      margin: 0;
      font-size: 1rem;
      font-weight: 300;
      /* line-height: 1.2rem; */
    }
    &--searchBtn {
      width: 30px;
      height: 30px;
      display: flex;
      align-self: center;
      cursor: pointer;
    }
    &--line {
      width: 0.1rem;
      height: 2rem;
      background-color: #dddddd;
      display: flex;
      align-self: center;
    }
  }
`;

const EachSearch = ({ index }) => {
  switch (index) {
    case 0: {
      return (
        <EachSearchWrap>
          <div className="search__part--container">
            <p className="search__part--title">위치</p>
            <p className="search__part--input">어디로 여행가세요?</p>
          </div>
          <div className="search__part--line"></div>
          <div className="search__part--container">
            <p className="search__part--title">체크인</p>
            <p className="search__part--input">날짜 입력</p>
          </div>
          <div className="search__part--line"></div>
          <div className="search__part--container">
            <p className="search__part--title">체크아웃</p>
            <p className="search__part--input">날짜 입력</p>
          </div>
          <div className="search__part--line"></div>
          <div className="search__part--container">
            <p className="search__part--title">인원</p>
            <p className="search__part--input">게스트 추가</p>
          </div>
          <img className="search__part--searchBtn" src={searchBtn} />
        </EachSearchWrap>
      );
    }
    case 1: {
      return (
        <EachSearchWrap>
          <div className="search__part--container">
            <p className="search__part--title">위치</p>
            <p className="search__part--input">어디로 여행가세요?</p>
          </div>
          <div className="search__part--line"></div>
          <div className="search__part--container">
            <p className="search__part--title">날짜</p>
            <p className="search__part--input">원하는 날짜를 입력하세요.</p>
          </div>
          <img className="search__part--searchBtn" src={searchBtn} />
        </EachSearchWrap>
      );
    }
  }
};

const Search = ({ index }) => {
  //index == 0 : 숙소 선택
  //index == 1 : 체험 선택
  return (
    <DetailedSearchWrap>
      <div className="search__container">
        <EachSearch index={index} />
      </div>
    </DetailedSearchWrap>
  );
};

export default Search;
