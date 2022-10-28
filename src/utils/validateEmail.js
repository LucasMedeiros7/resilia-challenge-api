export default function validateEmail(email) {
  const regexValidaEmail = /^\S+@\S+\.\S+$/;
  console.log(email);
  return regexValidaEmail.test(email);
}
