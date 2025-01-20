// src/App.js
import React, { Component } from "react";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import "./App.css";
import Contador from "./components/Contador";

import { TemaProvider } from "./components/TemaProvider";
import BotaoTema from "./components/BotaoTema";

import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, multi } from "./features/contadorSlice";

function App() {
  const handleButtonClick = (titulo) => {
    alert(`Você clicou no botão do card: ${titulo}`);
  };

  const valor = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Titulo texto="REDUX" />
      <div className="cards-container">


        {/* <TemaProvider>
          <div>
            <h1>Exemplo: Tema Claro/Escuro</h1>
            <BotaoTema />
          </div>
        </TemaProvider> */}

        <br />
        <h1>Contador: {valor}</h1>
        <br />

        <button onClick={() => dispatch(incrementar())}> Incrementar </button>
        <button onClick={() => dispatch(decrementar())}>Decrementar</button>
        <button onClick={() => dispatch(multi())}> Multiplica X2</button>

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
