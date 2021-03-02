import React from 'react';
import styled from 'styled-components';
import addVariable from '../../modifiers/addVariable';

const PopoverContainer = styled.div`
  margin-top: 10px;
  padding: 0 0.3em;
  position: absolute;
  z-index: 1000;
  box-sizing: content-box;
  background: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 30px 0 gainsboro;
  display: block;
`;

const VariableUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li {
    background: none;
    &:hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;

function Popover(props) {
  const { isOpen, store, variables } = props;

  function onClickVariable(event, variable) {
    if (store) {
      const variableText = `{{${variable}}}`;
      const newEditorState = addVariable(store.getEditorState(), variableText);
      store.setEditorState(newEditorState);
    }
  }

  if (!isOpen) {
    return (<></>);
  }

  return (
    <PopoverContainer>
      <VariableUl onMouseDown={(e)=>e.preventDefault()}>
        {variables.map((eachVariable) =>
          <li key={eachVariable}
              title={eachVariable}
              onClick={(event) => onClickVariable(event, eachVariable)}>
            {eachVariable}
          </li>)}
      </VariableUl>
    </PopoverContainer>
  );
}

export default Popover;
