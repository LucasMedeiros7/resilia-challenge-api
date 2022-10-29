import generateEnrollmentNumber from '../utils/generateEnrollmentNumber.js';
import validateEmail from '../utils/validateEmail.js';

class StudentServices {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async list() {
    const students = await this.studentRepository.listAll();
    return students;
  }

  async listByPoloId(polo_id) {
    const students = await this.studentRepository.listByPoloId(polo_id);
    return students;
  }

  async create(studentData) {
    if (!validateEmail(studentData.email)) {
      throw new Error('Invalid email');
    }

    const students = await this.studentRepository.listAll();
    const studentAlreadyExists = students.find(
      student => student.email === studentData.email
    );

    if (studentAlreadyExists) {
      throw new Error('Student Already exists');
    }

    await this.studentRepository.save({
      ...studentData,
      enrollment: generateEnrollmentNumber(students)
    });
  }

  async update(enrollment, updatedStudentData) {
    const studentExists = await this.studentRepository.listByEnrollment(enrollment);

    if (!studentExists) {
      throw new Error('There are no students with this enrollment');
    }

    if (!validateEmail(updatedStudentData.email)) {
      throw new Error('Invalid email');
    }

    await this.studentRepository.update(enrollment, updatedStudentData);
  }

  async delete(studentEnrollment) {
    const studentAlreadyExists = await this.studentRepository.listByEnrollment(
      studentEnrollment
    );
    if (!studentAlreadyExists) {
      throw new Error('Student not found');
    }
    await this.studentRepository.delete(studentEnrollment);
  }
}

export { StudentServices };
