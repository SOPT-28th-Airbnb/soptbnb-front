import React from "react";
import styled from "styled-components";

// place img 받기

const WanderCardWrap = styled.div`
  .card__wander {
    display: flex;
    flex-direction: column;
    margin-right: 1.2rem;
    &--img {
      width: 32.6rem;
      height: 32.6rem;
      border-radius: 0.3rem;
      margin-bottom: 0.3rem;
      object-fit: cover;
    }

    &--detail {
      margin: 0.5rem 0;
    }

    &--type {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.45rem;
    }

    &--desc {
      font-weight: 400;
      font-size: 0.9rem;
    }
  }
`;

const WanderCard = ({ type, desc, img }) => {
  return (
    <WanderCardWrap>
      <div className="card__wander">
        <img src={img} alt="" className="card__wander--img" />
        <div className="card__wander--detail">
          <div className="card__wander--type">{type}</div>
          <div className="card__wander--desc">{desc}</div>
        </div>
      </div>
    </WanderCardWrap>
  );
};

export default WanderCard;
