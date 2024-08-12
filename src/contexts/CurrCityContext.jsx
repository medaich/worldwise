import { createContext, useContext, useState } from "react";

const CurrCityContext = createContext();

export default function CurrentCityProvider({ children }) {
  const [currId, setCurrId] = useState("");

  return (
    <CurrCityContext.Provider value={{ currId, setCurrId }}>
      {children}
    </CurrCityContext.Provider>
  );
}

export function useCurrCity() {
  const context = useContext(CurrCityContext);

  if (context === undefined)
    throw new Error("CurrCityContext used Outside CurrCityProvider");
  return context;
}
