import { EditorState, Modifier, SelectionState } from 'draft-js';
import findWithRegex from 'find-with-regex';

// ns.regAscii = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)"+ns.asciiRegexp+"(?=\\s|$|[!,.?]))", "gi");

const unicodeRegex = new RegExp("", 'g');

export default function attachImmutableEntitiesToVariables(
  editorState,
) {
  const contentState = editorState.getCurrentContent();
  const blocks = contentState.getBlockMap();
  let newContentState = contentState;

  blocks.forEach((block) => {
    if (block) {
      const plainText = block.getText();

      const addEntityToVariable = (start, end) => {
        const existingEntityKey = block.getEntityAt(start);

        if (existingEntityKey) {
          const entity = newContentState.getEntity(existingEntityKey);

          if (entity && entity.getType() === 'variable') {
            return;
          }
        }

        const selection = SelectionState.createEmpty(
          block.getKey(),
        ).set('anchorOffset', start).set('focusOffset', end);

        const variableText = plainText.substring(start, end);
        const contentStateWithEntity = newContentState.createEntity(
          'variable',
          'IMMUTABLE',
          { name: variableText },
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        newContentState = Modifier.replaceText(
          newContentState,
          selection,
          variableText,
          undefined,
          entityKey,
        );
      };
      // findWithRegex()
    }
  });

  if (!newContentState.equals(contentState)) {
    return EditorState.push(editorState, newContentState, 'change-block-data');
  }

  return editorState;
}
