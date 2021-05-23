import React from "react";
import styled from "styled-components";

// place img 받기

const TypeCardWrap = styled.div`
  .card__type {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    &--img {
      width: 24.2rem;
      height: 24.2rem;
      border-radius: 0.5rem;
      margin-bottom: 0.3rem;
      object-fit: cover;
    }
    &--desc {
      font-size: 1.2rem;
    }
  }
`;

const TypeCard = ({ desc, img }) => {
  return (
    <TypeCardWrap>
      <div className="card__type">
        <img src={img} alt="" className="card__type--img" />
        <div className="card__type--desc">{desc}</div>
      </div>
    </TypeCardWrap>
  );
};

export default TypeCard;
