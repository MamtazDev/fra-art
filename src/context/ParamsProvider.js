import React, { createContext, useState } from "react";

export const ParamsContext = createContext();

const ParamsProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  if (userId.length > 0) {
    localStorage.setItem("params", userId);
  }
  const paramsInfo = { userId, setUserId };
  return (
    <ParamsContext.Provider value={paramsInfo}>
      {children}
    </ParamsContext.Provider>
  );
};

export default ParamsProvider;
