// src/components/Botao.js
import React from "react";

function Botao({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>;
}

export default Botao;
