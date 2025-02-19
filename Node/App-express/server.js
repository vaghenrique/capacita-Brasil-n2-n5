const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const app = express();
const prisma = new PrismaClient();

// Middleware para processar dados de formulários (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal: exibe a lista de alunos com botões para adicionar e remover
app.get('/', async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    
    let html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title> Lista de Alunos </title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Lista de Alunos da Escola</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    alunos.forEach(aluno => {
      html += `
          <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.email}</td>
            <td>${aluno.idade}</td>
            <td>
              <form action="/remover-aluno" method="POST" style="display:inline;">
                <input type="hidden" name="id" value="${aluno.id}">
                <button type="submit">Remover</button>
              </form>
            </td>
          </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
        <br>
        <button onclick="location.href='/novo-aluno'">Adicionar Novo Aluno</button>
      </body>
      </html>
    `;
    
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar dados dos alunos.');
  }
});

// Rota para exibir o formulário de cadastro de um novo aluno
app.get('/novo-aluno', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Adicionar Novo Aluno</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Adicionar Novo Aluno</h1>
      <form action="/novo-aluno" method="POST">
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="idade">Idade:</label><br>
        <input type="number" id="idade" name="idade" required><br><br>
        
        <button type="submit">Adicionar Aluno</button>
      </form>
      <br>
      <button onclick="location.href='/'">Voltar para a Lista</button>
    </body>
    </html>
  `;
  res.send(html);
});

// Rota POST para processar o cadastro de um novo aluno
app.post('/novo-aluno', async (req, res) => {
  const { nome, email, idade } = req.body;
  try {
    await prisma.aluno.create({
      data: {
        nome,
        email,
        idade: parseInt(idade)
      }
    });
    // Após adicionar o aluno, redireciona para a página principal
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar o aluno.');
  }
});

// Rota POST para remover um aluno pelo ID
app.post('/remover-aluno', async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.aluno.delete({
      where: { id: parseInt(id) }
    });
    // Após remover o aluno, redireciona para a página principal
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao remover o aluno.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
