import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  `;

  const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: white;
    width: 50%;
  `;

  return (
    <>
      <button onClick={() => setShow(true)}> Show Modal</button>
      {show && (
        <ModalBackground
          onClick={() => {
            setShow(false);
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide False </button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
