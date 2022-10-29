import express from 'express';
import cors from 'cors';
import { PrismaStudentRepository } from './infra/repositories/PrismaStudentRepository.js';
import { StudentServices } from './services/StudentServices.js';

const app = express();
const PORT = process.env.PORT || 3333;

const studentRepository = new PrismaStudentRepository();
const studentServices = new StudentServices(studentRepository);

app.use(cors());
app.use(express.json());

app.post('/students', async (req, res) => {
  const { name, email, polo_id } = req.body;
  try {
    await studentServices.create({ name, email, polo_id });
    return res.status(201).json({ name, email, polo_id });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.get('/students/:polo_id', async (req, res) => {
  const { polo_id } = req.params;
  const students = await studentServices.listByPoloId(Number(polo_id));
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

app.patch('/students/:enrollment', async (req, res) => {
  const { enrollment } = req.params;
  const { name, email, polo_id } = req.body;
  try {
    await studentServices.update(Number(enrollment), { name, email, polo_id });
    return res.json({ enrollment, name, email, polo_id });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.delete('/students/:enrollment', async (req, res) => {
  const { enrollment } = req.params;
  try {
    await studentServices.delete(Number(enrollment));
    return res
      .status(201)
      .json({ enrollment, message: 'Student successfully deleted' });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
