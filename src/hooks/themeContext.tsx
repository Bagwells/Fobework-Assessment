
import { createContext, ReactNode, SetStateAction, useState, Dispatch, useEffect } from 'react';

interface ThemeContextType {
  toggleTheme: () => void,
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  toggleTheme: () => {},
  setTheme: () => {}
});

const ThemeProvider = ({ children }:{children:ReactNode}) => {
  const [theme, setTheme] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => !prev)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
