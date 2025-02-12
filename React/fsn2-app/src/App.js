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

import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

// function App() {
//   const handleButtonClick = (titulo) => {
//     alert(`Você clicou no botão do card: ${titulo}`);
//   };

//   const valor = useSelector((state) => state.contador.valor);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <Titulo texto="REDUX" />
//       <div className="cards-container">


//         {/* <TemaProvider>
//           <div>
//             <h1>Exemplo: Tema Claro/Escuro</h1>
//             <BotaoTema />
//           </div>
//         </TemaProvider> */}

//         <br />
//         <h1>Contador: {valor}</h1>
//         <br />

//         <button onClick={() => dispatch(incrementar())}> Incrementar </button>
//         <button onClick={() => dispatch(decrementar())}> Decrementar </button>
//         <button onClick={() => dispatch(multi())}> Multiplicador X 2 </button>


//         {/* <Card
//           titulo="React"
//           descricao="Uma biblioteca JavaScript para criar interfaces de usuário."
//           onButtonClick={() => handleButtonClick("React")}
//         />

//         <Card
//           titulo="Componentização"
//           descricao="Divida sua aplicação em partes reutilizáveis e modulares."
//           onButtonClick={() => handleButtonClick("Componentização")}
//         />
//         <Card
//           titulo="Reutilização"
//           descricao="Escreva menos código ao reaproveitar componentes existentes."
//           onButtonClick={() => handleButtonClick("Reutilização")}
//         />

// <Card
//   titulo="Novo Card"
//   descricao="Aqui vai a descrição do card"
//   onButtonClick={() => handleButtonClick("NOVO")}
// />      */}

//       </div>
//     </div>
//   );
// }


// Componentes das páginas

const Home = () => <h2> Bem-vindo à Página Inicial! </h2>;
const About = () => <Card
  titulo="Novo Card"
  descricao="Aqui vai a descrição do card"
// onButtonClick={() => handleButtonClick("NOVO")}
/>;
const Products = () => <Contador />;
const Senha = () => <h2> Rota Secreta! </h2>;

// Rotas dinámicas
const ProductDetails = () => {
  const { id } = useParams(); // Captura o parâmetro 'id' da URL
  return <h2>Detalhes do Produto: {id}</h2>;
};

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> Sobre </Link></li>
          <li><Link to="/products"> Produtos </Link></li>
          <li><Link to="/product/123"> Detalhes do Produto (rota dinámica)</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/senha" element={<Senha />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}


export default App;
