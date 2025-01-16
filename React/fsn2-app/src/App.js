// src/App.js
import React, { Component } from "react";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import "./App.css";
import Contador from "./components/Contador";

import { TemaProvider } from "./components/TemaProvider";
import BotaoTema from "./components/BotaoTema";

function App() {
  const handleButtonClick = (titulo) => {
    alert(`Você clicou no botão do card: ${titulo}`);
  };

  return (
    <div className="App">
      <Titulo texto="Context API" />
      <div className="cards-container">
           

        <TemaProvider>
          <div>
            <h1>Exemplo: Tema Claro/Escuro</h1>
            <BotaoTema />
          </div>
        </TemaProvider>

        {/* <Card
          titulo="React"
          descricao="Uma biblioteca JavaScript para criar interfaces de usuário."
          onButtonClick={() => handleButtonClick("React")}
        />
        
        <Card
          titulo="Componentização"
          descricao="Divida sua aplicação em partes reutilizáveis e modulares."
          onButtonClick={() => handleButtonClick("Componentização")}
        />
        <Card
          titulo="Reutilização"
          descricao="Escreva menos código ao reaproveitar componentes existentes."
          onButtonClick={() => handleButtonClick("Reutilização")}
        />

        <Card
          titulo="Novo Card"
          descricao="Aqui vai a descrição do card"
          onButtonClick={() => handleButtonClick("NOVO")}
        />      */}

      </div>
    </div>
  );
}

export default App;
