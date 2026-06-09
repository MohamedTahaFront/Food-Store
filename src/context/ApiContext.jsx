/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useApi } from "../hooks/useApi";

export const apiContext = createContext();
export const ApiContextProvider = ({ children }) => {
  const { products, loading } = useApi();
  return (
    <apiContext.Provider value={{ products, loading }}>
      {children}
    </apiContext.Provider>
  );
};
