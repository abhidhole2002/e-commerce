import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [logout, setLogout] = useState(false);

  console.log(showLogin);

  const value = {
    showLogin,
    setShowLogin,
    isLogin,
    setIsLogin,
    logout,
    setLogout,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
