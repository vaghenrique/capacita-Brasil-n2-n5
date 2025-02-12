
const http = require('http'); // Módulo nativo do Node.js
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola, mundo!\n'); // Resposta enviada ao cliente
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
