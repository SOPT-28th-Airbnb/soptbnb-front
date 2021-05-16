import React from "react";
import styled from "styled-components";

import HostCardImg from "../../assets/img/HostCardImg.svg";

// place img 받기

const HostCardWrap = styled.div`
  .card__host {
    margin: 2rem 0;
    position: relative;
    width: 100%;

    &--img {
      width: 100%;
    }

    &--desc {
      position: absolute;
      top: 2rem;
      left: 2rem;
      color: white;
    }

    &--title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    &--subtitle {
      margin-bottom: 1rem;
    }

    &--btn {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  }
`;

const NearCard = ({ name, dist }) => {
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
          <button className="card__host--btn">자세히 알아보기</button>
        </div>
      </div>
    </HostCardWrap>
  );
};

export default NearCard;
