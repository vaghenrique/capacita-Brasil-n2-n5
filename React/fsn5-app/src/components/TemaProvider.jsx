import React, { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === "claro" ? "escuro" : "claro"));

  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
