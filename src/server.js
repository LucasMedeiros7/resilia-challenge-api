import express from 'express';
import cors from 'cors';
import { PrismaStudentRepository } from './repositories/PrismaStudentRepository.js';
import { StudentServices } from './services/StudentServices.js';

const app = express();
const PORT = process.env.PORT || 3333;

const studentRepository = new PrismaStudentRepository();
const studentServices = new StudentServices(studentRepository);

app.use(cors());
app.use(express.json());

app.post('/students', async (req, res) => {
  const { name, email, poloId } = req.body;
  try {
    await studentServices.create({ name, email, poloId });
    return res.status(201).json({ name, email, poloId });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.get('/students/:poloId', async (req, res) => {
  const { poloId } = req.params;
  const students = await studentServices.listByPoloId(Number(poloId));
  if (!students) {
    return res.status(404).json({ message: 'Students not found' });
  }
  return res.json(students);
});

app.get('/students', async (req, res) => {
  const students = await studentServices.list();
  if (!students) {
    return res.status(404).json({ message: 'Students not found' });
  }
  return res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
