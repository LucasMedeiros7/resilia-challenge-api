export default function generateEnrollmentNumber(students) {
  const allEnrollments = students.map(student => student.enrollment);
  let newEnrollment;

  while (allEnrollments.includes(newEnrollment) || !newEnrollment) {
    newEnrollment = '';
    for (let i = 0; i < 8; i++) {
      newEnrollment += (Math.random() * 9).toFixed();
    }
  }

  return newEnrollment;
}
