import React from "react";
import styled from "styled-components";
import searchBtn from "../../assets/img/searchBtn.svg";

const DetailedSearchWrap = styled.div`
  z-index: 2;
  width: 531px;
  height: 41px;
  border-radius: 33.5px;
  background-color: #ffffff;
`;

const EachSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px 0px 20px;
  height: 41px;
  .search__part {
    &--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &--title {
      font-weight: 600;
      font-size: 0.8rem;
      line-height: 9px;
      margin: 0 0 2px 0;
    }
    &--input {
      margin: 0;
      font-weight: 500;
      line-height: 12px;
    }
    &--searchBtn {
      width: 30px;
      height: 30px;
      display: flex;
      align-self: center;
    }
    &--line {
      width: 1px;
      height: 20px;
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
