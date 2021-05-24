import React from "react";
import styled from "styled-components";

// place img 받기

const ExpCardWrap = styled.div`
  .card__exp {
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

const ExpCard = ({ type, desc, img }) => {
  return (
    <ExpCardWrap>
      <div className="card__exp">
        <img src={img} alt="" className="card__exp--img" />
        <div className="card__exp--detail">
          <div className="card__exp--type">{type}</div>
          <div className="card__exp--desc">{desc}</div>
        </div>
      </div>
    </ExpCardWrap>
  );
};

export default ExpCard;
