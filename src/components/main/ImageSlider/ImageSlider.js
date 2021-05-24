import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import LeftArrow from "./LeftArrow";
import ResideCard from "../ResideCard";
import ExpCard from "../ExpCard";

const ImageSliderWrap = styled.div`
  [class*="slider"] {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }

  .slider__exp {
    margin-top: 1rem;
  }
`;

const ImageSlider = ({ type, list }) => {
  const [cards, setCards] = useState([]);
  // const [activeIndex, setActiveIndex] = useState(null);
  // const [length, setLength] = useState(null);

  useEffect(() => {
    (async () => {
      await setCards(list);
    })();
  }, [cards]);

  // const handleBtnClick = () => {
  //   let index = activeIndex;
  //   let length = length;
  //   if (index < 1) index = length - 1;
  //   else if (index === length - 1) index = 0;
  //   else index--;
  //   setActiveIndex(index);
  // };

  /*
  //switch-case문을 밖에서 정의하고 함수를 rendering 하는 방법은 없을까?
  const renderSwitch = (type) => {};
  */
  return (
    <ImageSliderWrap>
      {(() => {
        switch (type) {
          case "reside":
            return (
              <div className="slider__reside">
                {cards.map((card) => (
                  <ResideCard key={card._id} desc={card.desc} img={card.img} />
                ))}
              </div>
            );
          case "exp":
            return (
              <div className="slider__exp">
                {cards.map((card) => (
                  <ExpCard
                    key={card._id}
                    img={card.img}
                    type={card.type}
                    desc={card.desc}
                  />
                ))}
              </div>
            );
          default:
            return;
        }
      })()}
    </ImageSliderWrap>
  );
};

export default ImageSlider;
