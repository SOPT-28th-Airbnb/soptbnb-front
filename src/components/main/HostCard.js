import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import HostCardImg from "../../assets/img/HostCardImg.svg";

// place img 받기

const HostCardWrap = styled.div`
  .card__host {
    position: relative;
    width: 100%;

    &--img {
      width: 100%;
      height: 100%;
    }

    &--desc {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 5.2rem;
      color: white;
      padding: 1rem;
    }

    &--title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0.7rem;
    }

    &--subtitle {
      margin-bottom: 2.7rem;
      font-size: 1.2rem;
    }

    &--btn {
      border: none;
      padding: 0.813rem 1.815rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      color: black;
      background: white;
      width: 95px;
      white-space: nowrap;
    }
  }
`;

const NearCard = ({ name, dist, history }) => {
  const handleClick = (e) => {
    history.push("/host");
  };

  return (
    <HostCardWrap>
      <div className="card__host">
        <img src={HostCardImg} alt="" className="card__host--img" />
        <div className="card__host--desc">
          <div className="card__host--title">
            호스트가 <br />
            되어보세요
          </div>
          <div className="card__host--subtitle">
            숙소를 공유하여 부수입을 올리고 새로운 <br />
            가능성을 만나세요.
          </div>
          <button className="card__host--btn" onClick={handleClick}>
            자세히 알아보기
          </button>
        </div>
      </div>
    </HostCardWrap>
  );
};

export default withRouter(NearCard);
