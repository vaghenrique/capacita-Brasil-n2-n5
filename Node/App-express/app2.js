
const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (GET)
app.get('/', (req, res) => {
  // res.send('Página Inicial');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a página "Sobre" (GET)
app.get('/sobre', (req, res) => {
  // res.send('Página Sobre');
  res.sendFile(path.join(__dirname, 'sobre.html'));

});

app.get('/saiba:id',(req, res) =>{
  const userId = req.params.id;
  res.send(`Aqui a página Saiba mais, seu id é : ${userId}`);
}
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
