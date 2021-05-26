import React from "react";
import styled from "styled-components";

// place img 받기

const ResideCardWrap = styled.div`
  display: flex;

  .card__reside {
    display: flex;
    flex-direction: column;

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

const ResideCard = ({ desc, img, active }) => {
  return (
    <ResideCardWrap>
      <div className="card__reside">
        <img src={img} alt="" className="card__reside--img" />
        <div className="card__reside--desc">{desc}</div>
      </div>
      <div style={{ marginRight: "1rem" }} />
    </ResideCardWrap>
  );
};

export default ResideCard;
