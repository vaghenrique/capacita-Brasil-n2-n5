// src/components/Card.js
import React from "react";
import Botao from "./Botao";

function Card({ titulo, descricao, onButtonClick }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <hr/>
      <Botao texto="Saiba Mais" onClick={onButtonClick} />
    </div>
  );
}

export default Card;
