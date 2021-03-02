import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { FocusOn } from 'react-focus-on';

const StyledModal = Modal.styled`
  width: 40rem;
  height: ${(props) => props.height || '10rem'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => props.theme.mainBgColor};
  padding: ${(props) => props.padding || 0};

  @media screen and (max-width: 47.99em) {
    width: 20rem;
    height: ${(props) => props.height || '15rem'};
  }
`;
const CloseModalX = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 2.75rem;
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 1.75rem;
  font-family: Arial, Baskerville, monospace;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme.linkTextHoverBgColor};
  text-decoration: ${(props) => props.theme.link.decoration};
`;

function ModalDialog(props) {
  const { isOpen, toggleModal, children, height, padding } = props;
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      height={height}
      padding={padding}
    >
      <FocusOn>
        <CloseModalX title="Close (Esc)" type="button" onClick={toggleModal}>
          ×
        </CloseModalX>
        {children}
      </FocusOn>
    </StyledModal>
  );
}

export default ModalDialog;
