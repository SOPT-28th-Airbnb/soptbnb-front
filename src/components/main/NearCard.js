import React from "react";
import styled from "styled-components";

// place img 받기

const NearCardWrap = styled.div`
  .card__near {
    display: flex;
    /* margin-right: 3rem; */

    &--desc {
      display: flex;
      flex-direction: column;
    }

    &--name {
      font-size: 0.8rem;
    }

    &--dist {
      font-size: 0.7rem;
      color: darkgray;
    }
  }
`;

const NearCard = ({ name, dist }) => {
  return (
    <NearCardWrap>
      <div className="card__near">
        <img src="" alt="" className="card__near--img" />
        <div className="card__near--desc">
          <div className="card__near--name">{name}</div>
          <div className="card__near--dist">차로 {dist}분 거리</div>
        </div>
      </div>
    </NearCardWrap>
  );
};

export default NearCard;
