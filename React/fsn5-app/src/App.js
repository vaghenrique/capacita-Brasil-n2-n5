// src/App.js
import React from "react";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import "./App.css";

function App() {
  const handleButtonClick = (titulo) => {
    alert(`Você clicou no botão do card: ${titulo}`);
  };

  return (
    <div className="App">
      <Titulo texto="Componentização no Módulos no React" />

      <div className="cards-container">

        <Card
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
          titulo="NOVO"
          descricao="Criação de um novo card"
          onButtonClick={() => handleButtonClick("NOVO")}
        />

        <Card
          titulo="NOVO"
          descricao="Criação de um novo card"
          onButtonClick={() => handleButtonClick("NOVO")}
        />

      </div>
    </div>
  );
}

export default App;
