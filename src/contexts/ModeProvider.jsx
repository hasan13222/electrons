import { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const contextValues = {
    darkMode,
    setDarkMode,
  };
  return (
    <ModeContext.Provider value={contextValues}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
