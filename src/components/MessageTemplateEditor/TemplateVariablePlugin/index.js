import React from 'react';
import { EditorState } from 'draft-js';
import TemplateVariableSelect from './components/TemplateVariableSelect';
import attachImmutableEntitiesToVariables from './modifiers/attachImmutableEntitiesToVariables';

export default () => {
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const selectProps = {
    store,
  };

  const DecoratedVariableSelect = (props) => (
    <TemplateVariableSelect {...props} {...selectProps} />
  );

  return {
    VariableSelect: DecoratedVariableSelect,
    initialize: ({ getEditorState, setEditorState }) => {
      console.log('getEditorState', getEditorState);
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    onChange: (editorState) => {
      let newEditorState = attachImmutableEntitiesToVariables(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        const selection = editorState.getSelection();
        newEditorState = EditorState.forceSelection(newEditorState, selection);
      }
      return newEditorState;
    },
  };
};
