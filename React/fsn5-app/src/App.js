// src/App.js
import React from "react";
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
      <Titulo texto="Estados no React com Context" />

      <div className="cards-container">

        {/* <Contador></Contador> */}



        <TemaProvider>
          <div>
            <h1>Exemplo: Tema Claro/Escuro</h1>
            <BotaoTema />
          </div>
        </TemaProvider>

      </div>
    </div>
  );
}

export default App;
