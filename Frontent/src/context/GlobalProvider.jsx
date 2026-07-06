import React, { createContext, useState } from "react";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [Datas, setDatas] = useState([]);
  const [Login, setLogin] = useState({});
  return (
    <GlobalContext.Provider value={{ Datas, setDatas }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalProvider,GlobalContext};
