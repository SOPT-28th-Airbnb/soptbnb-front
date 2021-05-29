import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import LeftArrow from "./LeftArrow";
import ResideCard from "../ResideCard";
import ExpCard from "../ExpCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const ImageSliderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  [class*="slider"] {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
  }

  [class*="--items"] {
    display: flex;
    overflow-x: hidden;
  }

  .inactive {
    display: none;
  }

  .slider__exp {
    margin-top: 1rem;
  }
`;

const ImageSlider = ({ type, list }) => {
  const [cards, setCards] = useState([]);
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(2);
  const listLength = list.length;

  useEffect(() => {
    (async () => {
      await setCards(list);
    })();
  }, [cards]);

  const handleLeftClick = () => {
    let index = frontIndex;
    if (index === 0) return;
    else index--;
    setFrontIndex(index);
    setBackIndex(index + 2);
  };

  const handleRightClick = () => {
    let index = backIndex;
    if (index === listLength - 1) return;
    else index++;
    setBackIndex(index);
    setFrontIndex(index - 2);
  };

  /*
  // switch-case문을 밖에서 정의하고 함수를 rendering 하는 방법은 없을까?
  // --> 현재 switch문에 적용한 것처럼 IFFY 를 써보자!
  const renderSwitch = (type) => {};
  */
  return (
    <ImageSliderWrap>
      {(() => {
        switch (type) {
          case "reside":
            return (
              <div className="slider__reside">
                <LeftArrow
                  name="slider__reside"
                  handleBtnClick={handleLeftClick}
                />
                <div className="slider__reside--items">
                  {cards.map((card, idx) => (
                    <div
                      className={
                        idx >= frontIndex && idx <= backIndex
                          ? "active"
                          : "inactive"
                      }
                      key={idx}
                    >
                      <ResideCard
                        key={card._id}
                        desc={card.desc}
                        img={card.img}
                      />
                    </div>
                  ))}
                </div>
                <RightArrow
                  name="slider__reside"
                  handleBtnClick={handleRightClick}
                />
              </div>
            );
          case "exp":
            return (
              <div className="slider__exp">
                <LeftArrow
                  name="slider__exp"
                  handleBtnClick={handleLeftClick}
                />
                <div className="slider__reside--items">
                  {cards.map((card, idx) => (
                    <div
                      className={
                        idx >= frontIndex && idx <= backIndex
                          ? "active"
                          : "inactive"
                      }
                      key={idx}
                    >
                      <ExpCard
                        key={card._id}
                        img={card.img}
                        type={card.type}
                        desc={card.desc}
                      />
                    </div>
                  ))}
                </div>
                <RightArrow
                  name="slider__exp"
                  handleBtnClick={handleRightClick}
                />
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
