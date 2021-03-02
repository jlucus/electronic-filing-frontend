import styled from 'styled-components';
import { getFlexDirection, getJustifyContent } from '../../styles/cssHelper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  @media screen and (max-width: 47.99em) {
    justify-content: ${(props) => props.smJustifyContent};
  }
`;

const Space = ({ direction = 'horizontal', align = 'start', className, smAlign = null, children, ...restProps }) => {
  // const { direction = 'horizontal', align = 'start'} = props;

  const flexDirection = getFlexDirection(direction);
  const justifyContent = getJustifyContent(align);
  const smJustifyContent = getJustifyContent(smAlign || align);

  return (
    <Wrapper flexDirection={flexDirection}
             justifyContent={justifyContent}
             smJustifyContent={smJustifyContent}
             className={className} {...restProps}>
      {children}
    </Wrapper>
  );
};

export default Space;
