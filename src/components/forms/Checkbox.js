import styled from 'styled-components';

const Checkbox = styled.input`
  :disabled {
    filter: ${(props) =>
      props.showBlack ? 'invert(100%) hue-rotate(18deg) brightness(1.7)' : 0};
    // No easy way to style checkboxes, except by using "hidden"
    // checkbox and style an adjacent element such as a div
    // might not be good for accessibility
  }
`;

export default Checkbox;
