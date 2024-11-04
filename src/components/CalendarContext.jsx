import React, { createContext, useContext } from 'react';
import { useUpdateInfo } from '../hooks/updateInfo.js';

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const info = useUpdateInfo();

  return (
    <InfoContext.Provider value={info}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);