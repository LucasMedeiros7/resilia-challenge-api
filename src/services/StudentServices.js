import generateEnrollmentNumber from '../utils/generateEnrollmentNumber.js';

class StudentServices {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async listByPoloId(poloId) {
    const students = await this.studentRepository.listByPoloId(poloId);
    return students;
  }

  async create(studentData) {
    const students = await this.studentRepository.list();
    await this.studentRepository.save({
      ...studentData,
      enrollment: generateEnrollmentNumber(students)
    });
  }

  async update(studentData) {
    await this.studentRepository.update(studentData);
  }

  async delete(studentEnrollment) {
    await this.studentRepository.delete(studentEnrollment);
  }
}

export { StudentServices };
