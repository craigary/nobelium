import { createContext, useContext, useEffect, useCallback, useState } from 'react';
import { useMedia } from 'react-use';
import { useConfig } from '@/lib/config';

const ThemeContext = createContext({ dark: true });

export function ThemeProvider({ children }) {
  const { appearance } = useConfig();
  const prefersDark = useMedia('(prefers-color-scheme: dark)', null);
  const [dark, setDark] = useState(appearance === 'dark' || (appearance === 'auto' && prefersDark));

  useEffect(() => {
    if (typeof dark === 'boolean') {
      document.documentElement.classList.toggle('dark', dark);
      document.documentElement.classList.remove('color-scheme-unset');
    }
  }, [dark]);

  const toggleTheme = useCallback(() => {
    // Simple boolean toggle logic
    setDark((prevDark) => !prevDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
