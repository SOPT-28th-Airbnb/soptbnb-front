import React from "react";
import styled from "styled-components";

const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 30rem;
    background: #ffffff;
    border-radius: 5rem;
  }
`;
const CheckModal = () => {
  return (
    <ModalWrap>
      <div className="box">check</div>
    </ModalWrap>
  );
};

export default CheckModal;
