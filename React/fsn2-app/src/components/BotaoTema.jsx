import React, { useContext } from "react";
import { TemaContext } from "./TemaProvider";

function BotaoTema() {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <button onClick={alternarTema} style={{ background: tema === "claro" ? "#fff" : "#333", color: tema === "claro" ? "#000" : "#fff" }}>
      Alternar Tema: {tema}
    </button>
  );
}

export default BotaoTema;
