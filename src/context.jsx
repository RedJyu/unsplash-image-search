import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
  };

  return (
    <AppContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
