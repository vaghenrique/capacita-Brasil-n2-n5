// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const aluno1 = await prisma.aluno.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@escola.com',
      idade: 15,
    },
  });
  
  const aluno2 = await prisma.aluno.create({
    data: {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@escola.com',
      idade: 16,
    },
  });

  console.log('Alunos inseridos:', { aluno1, aluno2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
