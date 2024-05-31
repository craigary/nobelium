import React, { createContext, useContext, useState } from 'react';
import { useConfig } from '@/lib/config';

const ThemeContext = createContext({ dark: true });

export function ThemeProvider({ children }) {
  const { appearance } = useConfig();
  const [dark, setDark] = useState(appearance === 'dark' || appearance === 'auto');

  const toggleTheme = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
