import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [formData, setFormData] = useState({ nome: '', email: '', idade: '' });
  const [editingId, setEditingId] = useState(null);

  // Busca os alunos quando o componente é montado
  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await fetch('/api/alunos'); // Proxy redireciona para http://localhost:3001/api/alunos
      const data = await response.json();
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Atualizar aluno
      try {
        await fetch(`/api/alunos/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setEditingId(null);
        setFormData({ nome: '', email: '', idade: '' });
        fetchAlunos();
      } catch (error) {
        console.error('Erro ao atualizar aluno', error);
      }
    } else {
      // Adicionar novo aluno
      try {
        await fetch('/api/alunos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setFormData({ nome: '', email: '', idade: '' });
        fetchAlunos();
      } catch (error) {
        console.error('Erro ao criar aluno', error);
      }
    }
  };

  const handleEdit = (aluno) => {
    setEditingId(aluno.id);
    setFormData({ nome: aluno.nome, email: aluno.email, idade: aluno.idade.toString() });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja remover este aluno?")) {
      try {
        await fetch(`/api/alunos/${id}`, {
          method: 'DELETE',
        });
        fetchAlunos();
      } catch (error) {
        console.error('Erro ao remover aluno', error);
      }
    }
  };

  return (
    <div className="App">
      <h1> Lista de Alunos </h1>
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
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button onClick={() => handleEdit(aluno)}>Editar</button>
                <button onClick={() => handleDelete(aluno.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{editingId ? 'Atualizar Aluno' : 'Adicionar Novo Aluno'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{editingId ? 'Atualizar' : 'Adicionar'}</button>
      </form>
    </div>
  );
}

export default App;
