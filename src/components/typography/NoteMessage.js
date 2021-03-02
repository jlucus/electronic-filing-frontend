import styled from 'styled-components';
import { getColorFromName } from '../../styles/cssHelper';

const NoteMessage = styled.p`
  color: ${(props) => (props.color ? getColorFromName(props.theme, props.color) : props.theme.noteTextColor)};
  font-size: 0.875rem;
  font-weight: bold;
`;

export default NoteMessage;
