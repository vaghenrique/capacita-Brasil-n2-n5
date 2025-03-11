// server.js

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(cors()); // Permite requisições de outras origens (como o React)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Endpoints CRUD para Aluno */

// GET /api/alunos - Retorna todos os alunos
app.get('/api/alunos', async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
});

// GET /api/alunos/:id - Retorna um aluno pelo ID
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

// POST /api/alunos - Cria um novo aluno
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

// PUT /api/alunos/:id - Atualiza um aluno existente
app.put('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;
  try {
    const alunoAtualizado = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: { nome, email, idade: parseInt(idade) }
    });
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
});

// DELETE /api/alunos/:id - Remove um aluno
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
