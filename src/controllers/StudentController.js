import { PrismaStudentRepository } from '../infra/repositories/PrismaStudentRepository.js';
import { StudentServices } from '../services/StudentServices.js';

export function StudentController() {
  const studentRepository = new PrismaStudentRepository();
  const studentServices = new StudentServices(studentRepository);

  return {
    async create(request, response) {
      const { name, email, polo_id } = request.body;
      try {
        await studentServices.create({ name, email, polo_id });
        return response.status(201).json({ name, email, polo_id });
      } catch (err) {
        return response.status(400).json({ message: err.message });
      }
    },

    async listByPoloId(request, response) {
      const { polo_id } = request.params;
      const students = await studentServices.listByPoloId(Number(polo_id));
      if (!students) {
        return response.status(404).json({ message: 'Students not found' });
      }
      return response.json(students);
    },

    async list(_request, response) {
      const students = await studentServices.list();
      if (!students) {
        return response.status(404).json({ message: 'Students not found' });
      }
      return response.json(students);
    },

    async update(request, response) {
      const { enrollment } = request.params;
      const { name, email, polo_id } = request.body;
      try {
        await studentServices.update(Number(enrollment), { name, email, polo_id });
        return response.json({ enrollment, name, email, polo_id });
      } catch (err) {
        return response.status(400).json({ message: err.message });
      }
    },

    async delete(request, response) {
      const enrollment = Number(request.params.enrollment);
      try {
        await studentServices.delete(enrollment);
        return response
          .status(201)
          .json({ enrollment, message: 'Student successfully deleted' });
      } catch (err) {
        return response.status(400).json({ message: err.message });
      }
    }
  };
}
