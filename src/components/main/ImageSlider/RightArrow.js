import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ArrowWrap from "../../../lib/styles/ArrowWrap";

const RightArrow = ({ name, handleBtnClick }) => {
  return (
    <ArrowWrap style={{ right: "-3rem" }}>
      <div className={{ name } + "--arrow"} onClick={handleBtnClick}>
        <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
      </div>
    </ArrowWrap>
  );
};

export default RightArrow;
