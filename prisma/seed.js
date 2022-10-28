import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.pole.createMany({
    data: [
      { name: 'Rio de Janeiro' },
      { name: 'São Paulo' },
      { name: 'Belo Horizonte' },
      { name: 'Vitória' },
      { name: 'Brasília' },
      { name: 'Porto Alegre' },
      { name: 'Curitiba' },
      { name: 'Maceió' },
      { name: 'Salvador' },
      { name: 'Goiânia' },
      { name: 'Cuiabá' },
      { name: 'Campo Grande' },
      { name: 'Recife' }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
