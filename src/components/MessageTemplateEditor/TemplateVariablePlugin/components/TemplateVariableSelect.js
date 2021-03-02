import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modifier, SelectionState, EditorState } from 'draft-js';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import Popover from './Popover';

const ButtonWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const VariableButton = styled.button`
  background: white;
  color: #888;
  font-size: 1rem;
  height: 34px;
  border: 1px gray solid;
  border-radius: 10px;
  margin: 2px 4px;
`;

function TemplateVariableSelect(props) {
  const { store, variables } = props;
  const [isOpen, setIsOpen] = useState(false);

  function openPopover() {
    if (!isOpen) {
      setIsOpen(true);
    }
  }

  function closePopover() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (document) {
      document.addEventListener('click', closePopover);

      return () => {
        document.removeEventListener('click', closePopover);
      };
    }
  }, []);

  function onClickVariable() {
    if (isOpen) {
      closePopover();
    } else {
      openPopover();
    }
  }


  function onClick(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  return (
    <ButtonWrapper onClick={onClick}>
      <VariableButton onClick={onClickVariable}>Variables</VariableButton>
      <Popover isOpen={isOpen} store={store} variables={variables} />
    </ButtonWrapper>
  );
}

export default TemplateVariableSelect;
