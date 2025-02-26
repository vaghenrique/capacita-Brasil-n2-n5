const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const app = express();
const prisma = new PrismaClient();

// Middleware para processar JSON e dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

/* -------------- Endpoints da API RESTful -------------- */

// GET /api/alunos - Retorna a lista de alunos em JSON
app.get('/api/alunos', async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
});

// GET /api/alunos/:id - Retorna um aluno específico por ID
app.get('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await prisma.aluno.findUnique({
      where: { id: parseInt(id) }
    });
    if (!aluno) {
      res.status(404).json({ error: 'Aluno não encontrado' });
    } else {
      res.json(aluno);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
});

// POST /api/alunos - Cria um novo aluno (recebe JSON no corpo da requisição)
app.post('/api/alunos', async (req, res) => {
  const { nome, email, idade } = req.body;
  try {
    const novoAluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        idade: parseInt(idade)
      }
    });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
});

// PUT /api/alunos/:id - Atualiza um aluno existente pelo ID
app.put('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;
  try {
    const alunoAtualizado = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        email,
        idade: parseInt(idade)
      }
    });
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
});

// DELETE /api/alunos/:id - Remove um aluno pelo ID
app.delete('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aluno.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover aluno' });
  }
});

/* -------------- Página HTML para Demonstração -------------- */

// Página principal que exibe a lista de alunos e permite interagir com a API
app.get('/', async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    
    let html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Lista de Alunos</title>
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
              <button onclick="updateAluno(${aluno.id})">Atualizar</button>
              <button onclick="deleteAluno(${aluno.id})">Remover</button>
            </td>
          </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
        <h2>Adicionar Novo Aluno</h2>
        
        <form id="novoAlunoForm">
          <label for="nome">Nome:</label><br>
          <input type="text" id="nome" name="nome" required><br><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required><br><br>
          <label for="idade">Idade:</label><br>
          <input type="number" id="idade" name="idade" required><br><br>
          <button type="submit">Adicionar Aluno</button>
        </form>
        
        <script>
          // Adicionar novo aluno via fetch API (POST)
          document.getElementById('novoAlunoForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const idade = document.getElementById('idade').value;
            const response = await fetch('/api/alunos', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ nome, email, idade })
            });
            if (response.ok) {
              window.location.reload();
            } else {
              alert('Erro ao adicionar aluno');
            }
          });
          
          // Atualizar aluno via fetch API (PUT)
          async function updateAluno(id) {
            const nome = prompt('Digite o novo nome:');
            const email = prompt('Digite o novo email:');
            const idade = prompt('Digite a nova idade:');
            if (nome && email && idade) {
              const response = await fetch('/api/alunos/' + id, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, idade })
              });
              if (response.ok) {
                window.location.reload();
              } else {
                alert('Erro ao atualizar aluno');
              }
            }
          }
          
          // Remover aluno via fetch API (DELETE)
          async function deleteAluno(id) {
            if (confirm('Deseja realmente remover este aluno?')) {
              const response = await fetch('/api/alunos/' + id, {
                method: 'DELETE'
              });
              if (response.ok) {
                window.location.reload();
              } else {
                alert('Erro ao remover aluno');
              }
            }
          }
        </script>
      </body>
      </html>
    `;
    
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar dados dos alunos.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
