import React from "react";
import styled from "styled-components";

// place img 받기

const WanderCardWrap = styled.div`
  .card__wander {
    display: flex;
    flex-direction: column;
    /* margin-right: 1rem; */

    &--detail {
      margin: 0.5rem 0;
    }

    &--desc {
      font-size: 0.7rem;
    }
  }
`;

const WanderCard = ({ type, desc }) => {
  return (
    <WanderCardWrap>
      <div className="card__wander">
        <img src="" alt="" className="card__wander--img" />
        <div className="card__wander--detail">
          <div className="card__wander--type">{type}</div>
          <div className="card__wander--desc">{desc}</div>
        </div>
      </div>
    </WanderCardWrap>
  );
};

export default WanderCard;
