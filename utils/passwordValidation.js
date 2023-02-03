export const passwordValidation = (password) => {
  const containsLowercaseLetterRegex = /[a-z]/;
  const containsUppercaseLetterRegex = /[A-Z]/;
  const containsDigitRegex = /\d/;
  const containsSpecialCharacterRegex = /[!@#$%^&*]/;
  const containsEightOrMoreCharactersRegex = /^.{8,}$/;

  if (password === '') {
    return `can't be empty`;
  }

  if (!containsLowercaseLetterRegex.test(password)) {
    return `does not contain 1 lowercase letter`;
  }

  if (!containsUppercaseLetterRegex.test(password)) {
    return `does not contain 1 uppercase letter`;
  }

  if (!containsDigitRegex.test(password)) {
    return `does not contain 1 number`;
  }

  if (!containsSpecialCharacterRegex.test(password)) {
    return `does not contain 1 special character`;
  }

  if (!containsEightOrMoreCharactersRegex.test(password)) {
    return `minimum 8 characters`;
  }

  return true;
};
