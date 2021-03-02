import React, { useReducer, useContext, createContext } from 'react';

const ModalContext = createContext();
const ModalDispatch = createContext();

const initialState = {
  isOpen: false,
  header: null,
  content: null,
  showButton1: true,
  button1Props: {
    size: null,
    text: null,
    color: null,
    nextRoute: null,
  },
  showButton2: false,
  button2Props: {
    size: null,
    text: null,
    color: null,
    nextRoute: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      const payload = action.payload;
      return { ...state, ...payload };
    default:
      return {
        isOpen: false,
        header: null,
        content: null,
        showButton1: true,
        button1Props: {
          size: null,
          text: null,
          color: null,
        },
        showButton2: false,
        button2Props: {
          size: null,
          text: null,
          color: null,
        },
      };
  }
};

export const GlobalModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalDispatch.Provider value={dispatch}>
      <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
    </ModalDispatch.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export const useModalDispatch = () => useContext(ModalDispatch);
