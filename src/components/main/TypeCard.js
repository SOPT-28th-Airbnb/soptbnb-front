import React from "react";
import styled from "styled-components";

// place img 받기

const TypeCardWrap = styled.div`
  .card__type {
    display: flex;
    flex-direction: column;
    /* margin-right: 1rem; */

    &--desc {
      font-size: 1.2rem;
    }
  }
`;

const TypeCard = ({ desc }) => {
  return (
    <TypeCardWrap>
      <div className="card__type">
        <img src="" alt="" className="card__type--img" />
        <div className="card__type--desc">{desc}</div>
      </div>
    </TypeCardWrap>
  );
};

export default TypeCard;
