import React, { useState, createContext } from "react";

export const NavContext = createContext();

const NavContextProvider = props => {
  const [defaultNav, setDefaultNav] = useState(true);

  const defaultTrue = () => {
    setDefaultNav(true);
  };

  const defaultFalse = () => {
    setDefaultNav(false);
  };

  return (
    <NavContext.Provider value={{ defaultNav, defaultTrue, defaultFalse }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
