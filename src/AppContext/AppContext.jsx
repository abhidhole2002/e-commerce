import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  const value = {
    showLogin,
    setShowLogin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
