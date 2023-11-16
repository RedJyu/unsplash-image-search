import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();
const getMode = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
  return prefersDark;
};
export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getMode());
  const [searchTerm, setSearchTerm] = useState('car');
  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
  };
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);
  return (
    <AppContext.Provider
      value={{ isDark, toggleDark, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
