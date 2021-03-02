import React from 'react';
import { useRouter } from 'next/router';
import ModalDialog from './ModalDialog';
import { Heading2, ModalSubheading } from '../typography';
import { Button } from '../buttons';
import { FlexWrapper } from '../layout-containers/Wrappers';
import { useModalContext, useModalDispatch } from '../contexts';

function Modal() {
  const state = useModalContext();
  const {
    isOpen,
    header,
    content,
    showButton1,
    button1Props,
    showButton2,
    button2Props,
  } = state;
  const dispatch = useModalDispatch();
  const router = useRouter();

  const toggleModal = () => {
    dispatch({
      type: 'SET_ERROR',
      payload: { isOpen: !isOpen },
    });
  };

  const nextAction = (e) => {
    const button = e.target.name;

    if (button === 'button1') {
      if (button1Props.nextRoute) {
        router.push(button1Props.nextRoute);
      }
    }

    // we now this must be 2nd button
    if (button2Props.nextRoute) {
      router.push(button2Props.nextRoute);
    }

    // Need to get rid of modal at the end
    toggleModal();
  };

  if (!isOpen) return null;

  return (
    <ModalDialog
      isOpen={isOpen}
      toggleModal={toggleModal}
      height="auto"
      padding="1rem"
    >
      <Heading2 textAlign="center">
        {header || "We're sorry, an error has occurred."}
      </Heading2>
      <FlexWrapper padding="0 1rem">
        <ModalSubheading textAlign="center">
          {content ||
            'Please try again later and contact efilesd-support@pasaconsult.com if the error persists.'}
        </ModalSubheading>
      </FlexWrapper>
      <FlexWrapper justifyContent="center" padding="1rem 0" display="flex">
        {showButton1 && (
          <Button
            name="button1"
            size={button1Props.size || 'large'}
            color={button1Props.color || 'primary'}
            onClick={nextAction}
          >
            {button1Props.text || 'Close'}
          </Button>
        )}
        {showButton2 && (
          <Button
            name="button2"
            size={button2Props.size || 'large'}
            color={button2Props.color || 'secondary'}
            onClick={nextAction}
          >
            {button2Props.text || 'Next'}
          </Button>
        )}
      </FlexWrapper>
    </ModalDialog>
  );
}

export default Modal;
