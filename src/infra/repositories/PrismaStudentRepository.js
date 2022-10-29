import { prisma } from '../db/database.js';
class PrismaStudentRepository {
  constructor() {
    this.database = prisma;
  }

  async save(student) {
    const newStudent = {
      email: student.email,
      name: student.name,
      enrollment: student.enrollment,
      polo_id: student.poloId
    };
    await this.database.student.create({ data: newStudent });
  }

  async listAll() {
    const students = await this.database.student.findMany();
    return students;
  }

  async listByPoloId(poloId) {
    const students = await this.database.student.findMany({
      where: { polo_id: poloId }
    });
    return students;
  }

  async listByEnrollment(studentEnrollment) {
    const student = await this.database.student.findFirst({
      where: { email: studentEnrollment }
    });
    return student;
  }

  async update(student) {
    await this.database.student.update({
      where: {
        enrollment: student.enrollment
      },
      data: {
        name: student.name,
        email: student.email,
        polo_id: student.poloId
      }
    });
  }

  async delete(studentEnrollment) {
    await this.database.student.delete({
      where: { enrollment: studentEnrollment }
    });
  }
}

export { PrismaStudentRepository };
