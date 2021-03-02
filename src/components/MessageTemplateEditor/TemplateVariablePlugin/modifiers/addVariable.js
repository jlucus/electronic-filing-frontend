import { Modifier, EditorState } from 'draft-js';

const Mode = {
  INSERT: 'INSERT',
  REPLACE: 'REPLACE',
};

export default function addVariable(
  editorState,
  variableName,
  mode = Mode.INSERT,
) {
  const variable = variableName;
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'variable',
    'IMMUTABLE',
    { name: variableName },
  );

  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const currentSelectionState = editorState.getSelection();

  let variableAddedContent;
  let variableEndPos = 0;
  let blockSize = 0;
  switch (mode) {
    case Mode.INSERT: {
      const afterRemovalContentState = Modifier.removeRange(
        contentState,
        currentSelectionState,
        'backward',
      );

      const targetSelection = afterRemovalContentState.getSelectionAfter();

      variableAddedContent = Modifier.insertText(
        afterRemovalContentState,
        targetSelection,
        variable,
        undefined,
        entityKey,
      );

      variableEndPos = targetSelection.getAnchorOffset();
      const blockKey = targetSelection.getAnchorKey();
      blockSize = contentState.getBlockForKey(blockKey).getLength();

      break;
    }
    /*
    case Mode.REPLACE: {
      const { begin, end } = getSearchText(editorState, currentSelectionState);

      //
      const variableTextSelection = currentSelectionState.merge({
        anchorOffset: begin,
        focusOffset: end,
      });

      variableAddedContent = Modifier.replaceText(
        contentState,
        variableTextSelection,
        variable,
        undefined,
        entityKey,
      );

      variableEndPos = end;
      const blockKey = variableTextSelection.getAnchorKey();
      blockSize = contentState.getBlockForKey(blockKey).getLength();
      break;
    }

     */

    default:
      throw new Error('Unidentified value');
  }

  if (variableEndPos === blockSize) {
    variableAddedContent = Modifier.insertText(
      variableAddedContent,
      variableAddedContent.getSelectionAfter(),
      ' ',
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    variableAddedContent,
    'insert-fragment',
  );
  return EditorState.forceSelection(newEditorState, variableAddedContent.getSelectionAfter());
}

export { Mode };
