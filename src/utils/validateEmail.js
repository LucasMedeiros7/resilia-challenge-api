export default function validateEmail(email) {
  const regexValidaEmail = /^\S+@\S+\.\S+$/;
  return regexValidaEmail.test(email);
}
