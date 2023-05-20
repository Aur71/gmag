import styles from './AuthForm.module.scss';

const AuthForm = ({
  submitForm,
  buttonText,
  isLoading,
  email,
  setEmail,
  password,
  setPassword,
  error,
}) => {
  return (
    <form className={styles.auth_form} onSubmit={submitForm}>
      <label htmlFor='email'>Email: demo@gmail.com</label>
      <input
        type='email'
        name='email'
        placeholder='email@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password: qweASD1!</label>
      <input
        type='password'
        name='password'
        placeholder='QweAsd12!@#$%'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' disabled={isLoading}>
        {buttonText}
      </button>
      {error ? <div className={styles.error}>{error}</div> : null}
    </form>
  );
};

export default AuthForm;
