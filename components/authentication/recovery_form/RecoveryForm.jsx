import styles from './RecoveryForm.module.scss';

const RecoveryForm = ({ submitForm, email, setEmail, emailError }) => {
  return (
    <form className={styles.recovery_form} onSubmit={submitForm}>
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
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RecoveryForm;
