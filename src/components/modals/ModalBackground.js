import styled from 'styled-components';

const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: ${(props) => props.theme.modalBgColor};
  align-items: center;
  justify-content: center;
`;

export default ModalBackground;
