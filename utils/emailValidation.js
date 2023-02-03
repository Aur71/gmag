export const emailValidation = (email) => {
  const gmailRegex = /^[a-z\d]+[a-z\d.-]+@gmail\.com$/i;
  const startWithLetterOrNumberRegex = /^[a-z\d]/i;
  const endWithLetterOrNumberRegex = /[a-z\d]$/i;
  const endsWithGmailComRegex = /@gmail\.com$/i;

  if (email === '') {
    return `can't be empty`;
  }

  if (!startWithLetterOrNumberRegex.test(email)) {
    return `dosen't start with a letter / number`;
  }

  if (!endWithLetterOrNumberRegex.test(email)) {
    return `dosen't end with a letter / number`;
  }

  if (!endsWithGmailComRegex.test(email)) {
    return `forgot @gmail.com`;
  }

  if (!gmailRegex.test(email)) {
    return `invalid email`;
  }

  return true;
};
