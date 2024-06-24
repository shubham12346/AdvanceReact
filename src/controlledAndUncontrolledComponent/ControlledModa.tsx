import React, { useState } from "react";
import styled from "styled-components";

const ControlledModal = ({ shouldDisplay, onClose, children }) => {
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
      {shouldDisplay && (
        <ModalBackground
          onClick={() => {
            onClose();
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide </button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ControlledModal;
