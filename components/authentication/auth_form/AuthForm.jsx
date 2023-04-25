import styles from './AuthForm.module.scss';

const AuthForm = ({
  submitForm,
  buttonText,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
}) => {
  return (
    <form className={styles.auth_form} onSubmit={submitForm}>
      <label htmlFor='email'>
        Email: <span>{emailError}</span>
      </label>
      <input
        type='email'
        name='email'
        placeholder='email@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>
        Password: <span>{passwordError}</span>
      </label>
      <input
        type='password'
        name='password'
        placeholder='QweAsd12!'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>{buttonText}</button>
    </form>
  );
};

export default AuthForm;
