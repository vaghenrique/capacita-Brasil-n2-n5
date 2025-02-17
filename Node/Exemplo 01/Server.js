
const http = require('http'); // Módulo nativo do Node.js
const port = 3000;
const port2 = 3001;

const server1 = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola, Esse é o servidor 1\n'); // Resposta enviada ao cliente
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola, Esse é o servidor 2\n'); // Resposta enviada ao cliente
});

server1.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});

server2.listen(port2, () => {
  console.log(`Servidor 2  rodando em http://localhost:${port2}/`);
});
