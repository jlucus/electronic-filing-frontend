import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../contexts/ThemeModeProvider';
import ModalDialog from './ModalDialog';
import { Heading2 } from '../typography/headings/index';

const LinkLine = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 47.99em) {
    flex-direction: column;
  }
`;

const AccessLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.linkTextColor};

  &:hover {
    line-height: 1.5em;
    color: ${(props) => props.theme.linkTextHoverColor};
    background-color: ${(props) => props.theme.linkTextHoverBgColor};
  }
`;
function AccessibilityModal({ isOpen, toggleModal }) {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useThemeContext();

  function onActiveLightTheme() {
    switchToLightMode();
  }

  function onActiveDarkTheme() {
    switchToDarkMode();
  }

  function onToggleAudioAssist() {
    if (document.getElementById('browsealoud-button--launchpad')) {
      document.getElementById('browsealoud-button--launchpad').click();
    }
  }

  return (
    <ModalDialog isOpen={isOpen} toggleModal={toggleModal}>
      <Heading2 textAlign="center">Accessibility Tools</Heading2>
      <LinkLine>
        <span>
          <AccessLink href="#" onClick={() => onToggleAudioAssist()}>
            Turn audio/vision assist on/off
          </AccessLink>
        </span>
        <span>
          | <em>Contrast:</em>{' '}
          {darkModeActive && (
            <AccessLink
              href="#"
              onClick={() => onActiveLightTheme()}
              title="Set contrast to normal"
            >
              Default
            </AccessLink>
          )}
          {!darkModeActive && <>Default</>} / {darkModeActive && <>High</>}
          {!darkModeActive && (
            <AccessLink
              href="#"
              onClick={() => onActiveDarkTheme()}
              title="Set contrast to high"
            >
              High
            </AccessLink>
          )}
        </span>
        <span>
          |{' '}
          <AccessLink href="https://www.sandiego.gov/accessibility">
            More Info
          </AccessLink>
        </span>
      </LinkLine>
    </ModalDialog>
  );
}

export default AccessibilityModal;
