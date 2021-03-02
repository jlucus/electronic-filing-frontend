import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { screenMedia, mediaQueries } from "../../styles/cssHelper";


const gridColumns = 12;

const cssHelper = {
  col: (column, gridColumns) => {
    const singleCol = 100 / gridColumns;
    const colWidth = singleCol * column;
    const colPadding = singleCol / 8.0;

    return `
      width: ${colWidth}%;
      float: left;
      padding-left: ${colPadding}%;
      padding-right: ${colPadding}%;
    `;
  },
  noGutter: `
    padding-right: 0;
    padding-left: 0;
  `,
};

const Col = styled.div`
  position: relative;
  width: 100%;
  word-wrap: break-word;
  min-height: 1px;
  ${(props) => props.align && `text-align: ${props.align};`}
  ${(props) => props.sm && screenMedia`${cssHelper.col(props.sm, gridColumns)}`}
  ${(props) => props.span && mediaQueries("md")(cssHelper.col(props.span, gridColumns))};
  ${(props) => props.noGutter && mediaQueries("md")(cssHelper.noGutter)};
  ${(props) => props.noGutter && screenMedia(`${cssHelper.noGutter}`)}

`;

Col.propTypes = {
  align: PropTypes.string,
  noGutter: PropTypes.bool,
  sm: PropTypes.number,
  span: PropTypes.number,
};

export default Col;
