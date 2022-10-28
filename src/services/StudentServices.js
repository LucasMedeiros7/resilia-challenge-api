import generateEnrollmentNumber from '../utils/generateEnrollmentNumber.js';
import validateEmail from '../utils/validateEmail.js';

class StudentServices {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async listByPoloId(poloId) {
    const students = await this.studentRepository.listByPoloId(poloId);
    return students;
  }

  async create(studentData) {
    if (!validateEmail(studentData)) {
      throw new Error('Invalid email');
    }

    const students = await this.studentRepository.list();
    const studentAlreadyExists = students.find(
      student => student.email === studentData.email
    );

    if (!studentAlreadyExists) {
      throw new Error('Student Already exists');
    }

    await this.studentRepository.save({
      ...studentData,
      enrollment: generateEnrollmentNumber(students)
    });
  }

  async update(studentData) {
    const studentAlreadyExists = await this.studentRepository.listByEmail(
      studentData.email
    );

    if (!validateEmail(studentData.email) || !studentAlreadyExists) {
      throw new Error('Invalid email');
    }

    await this.studentRepository.update(studentData);
  }

  async delete(studentEnrollment) {
    await this.studentRepository.delete(studentEnrollment);
  }
}

export { StudentServices };
