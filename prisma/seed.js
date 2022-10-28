import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';
import generateEnrollmentNumber from '../src/utils/generateEnrollmentNumber.js';

const prisma = new PrismaClient();

async function main() {
  await prisma.polo.createMany({
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

  const students = await createRandomStudents();
  await prisma.student.createMany({ data: students });
}

async function fetchRandomUser(enrollment) {
  const response = await fetch('https://randomuser.me/api/?nat=br');
  const { results } = await response.json();
  const { name, email } = results[0];

  const completeName = `${name.first} ${name.last}`;
  const randomPoloId = Math.floor(Math.random() * 12) + 1;
  const typeGmail = email.replace('example', 'gmail');

  return {
    name: completeName,
    polo_id: randomPoloId,
    email: typeGmail,
    enrollment
  };
}

async function createRandomStudents() {
  const students = [];

  for (let i = 0; i < 30; i++) {
    const enrollment = generateEnrollmentNumber(students);
    const randomUser = await fetchRandomUser(enrollment);
    students.push(randomUser);
  }

  return students;
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
