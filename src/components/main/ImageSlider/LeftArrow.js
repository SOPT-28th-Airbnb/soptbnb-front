import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LeftArrow = ({ handleBtnClick }) => {
  return (
    <div className="backArrow" onClick={handleBtnClick}>
      <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
