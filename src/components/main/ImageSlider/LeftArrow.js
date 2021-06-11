import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ArrowWrap from "../../../lib/styles/ArrowWrap";

const LeftArrow = ({ name, handleBtnClick }) => {
  return (
    <ArrowWrap style={{ left: "-3rem" }}>
      <div className={{ name } + "--arrow"} onClick={handleBtnClick}>
        <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
      </div>
    </ArrowWrap>
  );
};

export default LeftArrow;
