import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useCookie } from "next-cookie";

import { lightTheme, darkTheme } from "../../styles/themes";


export const ThemeContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const cookie = useCookie();

  const [darkModeActive, setDarkModeActive] = useState(cookie.get("darkMode") === "1");

  function switchToDarkMode() {
    setDarkModeActive(true);
    cookie.set("darkMode", 1);
  }

  function switchToLightMode() {
    setDarkModeActive(false);
    cookie.set("darkMode", 0);
  }

  const theme = darkModeActive ? darkTheme : lightTheme;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeContext.Provider
      value={ {
        mounted,
        switchToDarkMode,
        switchToLightMode,
        darkModeActive,
      } }
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={ { visibility: "hidden" } }>{body}</div>;
  }

  return body;
};

// next-dark-mode package provide autoMode as true so it shows dark mode as default.
// we need light mode

export default ThemeModeProvider;

export const useThemeContext = () => useContext(ThemeContext);
