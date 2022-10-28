import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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

  async list() {
    const students = await this.database.student.findMany();
    return students;
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
