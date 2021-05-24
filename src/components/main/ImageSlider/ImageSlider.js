import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LeftArrow from "./LeftArrow";
import ResideCard from "../ResideCard";
import ExpCard from "../ExpCard";

const ImageSliderWrap = styled.div``;

const ImageSlider = ({ type, list }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(list);
    console.log(list);
  }, []);

  const renderSwitch = (type) => {
    switch (type) {
      case "reside":
        return (
          cards &&
          cards.map((card) => {
            return (
              <ResideCard key={card._id} desc={card.desc} img={card.img} />
            );
          })
        );
      case "exp":
        return (
          cards &&
          cards.map((card) => {
            return (
              <ExpCard
                key={card._id}
                img={card.img}
                type={card.type}
                desc={card.desc}
              />
            );
          })
        );
      default:
        return;
    }
  };

  return <ImageSliderWrap>{renderSwitch({ type })}</ImageSliderWrap>;
};

export default ImageSlider;
