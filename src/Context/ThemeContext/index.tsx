import React, { useState, useCallback, useLayoutEffect } from 'react';
import { ThemeContextType } from './ThemeContext';

export const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ ...props }): JSX.Element => {
  let defaultMode = 'light';
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    // on first page load, read the theme preset in the localstorage or the system-default theme
    let mode = localStorage.getItem('crm-app-theme') || defaultMode;
    switch (mode) {
      case 'system':
        if (window.matchMedia) {
          const query = window.matchMedia('(prefers-color-scheme: dark)');
          if (query.matches) {
            setDarkMode(true);
          } else {
            setDarkMode(false);
          }
        }
        break;
      case 'dark':
        setDarkMode(true);
        break;
      default:
        setDarkMode(false);
    }
    setAppModeInLocalStorage(mode);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleDarkMode = useCallback(() => {
    setAppModeInLocalStorage(darkMode ? 'light' : 'dark');
    setDarkMode((prevMode) => !prevMode);
  }, [darkMode]);

  const setAppModeInLocalStorage = (mode: string) => {
    localStorage.setItem('crm-app-theme', mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
