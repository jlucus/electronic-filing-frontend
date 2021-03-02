import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: ${(props) => props.width || '10px'};
  height: ${(props) => props.height || '10px'};
`;

function Icon({ src, width, height }) {
  return <Img src={src} width={width} height={height} />;
}

Icon.defaultProps = {
  src: '',
  width: '10px',
  height: '10px',
};

Icon.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
