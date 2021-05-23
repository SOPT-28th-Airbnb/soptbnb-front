import React from "react";
import styled from "styled-components";

// place img 받기

const NearCardWrap = styled.div`
  .card__near {
    display: flex;
    /* margin-right: 3rem; */

    &--desc {
      height: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &--img {
      width: 3.99rem;
      height: 4rem;
      border-radius: 0.5rem;
      margin-right: 1.09rem;
    }

    &--name {
      font-size: 1rem;
      margin-bottom: 0.3rem;
      font-weight: 400;
    }

    &--dist {
      font-size: 1rem;
      font-weight: 400;
      color: #747474;
    }
  }
`;

const NearCard = ({ name, dist, img }) => {
  console.log(name);
  console.log(dist);
  console.log(img);
  return (
    <NearCardWrap>
      <div className="card__near">
        <img src={img} alt="" className="card__near--img" />
        <div className="card__near--desc">
          <div className="card__near--name">{name}</div>
          <div className="card__near--dist">차로 {dist} 거리</div>
        </div>
      </div>
    </NearCardWrap>
  );
};

export default NearCard;
