import { prisma } from '../db/database.js';

class PrismaStudentRepository {
  constructor() {
    this.database = prisma;
  }

  async save(student) {
    await this.database.student.create({ data: student });
  }

  async listAll() {
    const students = await this.database.student.findMany();
    return students;
  }

  async listByPoloId(polo_id) {
    const students = await this.database.student.findMany({ where: { polo_id } });
    return students;
  }

  async listByEnrollment(studentEnrollment) {
    const student = await this.database.student.findFirst({
      where: { enrollment: studentEnrollment }
    });
    return student;
  }

  async update(enrollment, updatedStudent) {
    await this.database.student.update({
      where: { enrollment },
      data: {
        name: updatedStudent.name,
        email: updatedStudent.email,
        polo_id: updatedStudent.polo_id
      }
    });
  }

  async delete(enrollment) {
    await this.database.student.delete({ where: { enrollment } });
  }
}

export { PrismaStudentRepository };
