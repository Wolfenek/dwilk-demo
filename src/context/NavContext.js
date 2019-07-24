import React, { useState, createContext } from "react";

export const NavContext = createContext();

const NavContextProvider = props => {
  const [defaultNav, setDefaultNav] = useState(true);

  const handleDefaultNav = () => {
    setDefaultNav(!defaultNav);
  };

  return (
    <NavContext.Provider value={{ defaultNav, handleDefaultNav }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
