import React, { createContext, useContext } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children, data }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
