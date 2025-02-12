const express = require('express');
const app = express();
const port = 3000;

// Rota para a URL raiz
app.get('/', (req, res) => {
  res.send('Olá, mundo com Express!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
