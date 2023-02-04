import styles from './AuthentificationForms.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);

  const checkEmail = () => {
    // Check if there is an email in the database

    setEmailError('Recovery email sent');
    setShowEmailError('no error');

    //  setEmailError('This email isn`t registered');
    //  setShowEmailError('error');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail();

    if (isEmailValid) {
      console.log('recovery email send');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowEmailError(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [showEmailError]);

  return (
    <div className='page-center'>
      <div className={styles.form_wrapper}>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='logo' priority={true} />
        </Link>

        <form className={styles.form}>
          <h1>Password Recovery</h1>

          <label htmlFor='email'>
            Email:{' '}
            <span
              className={`${showEmailError === 'no error' && styles.no_error} ${
                showEmailError === 'error' && styles.error
              }`}
            >
              {emailError}
            </span>
          </label>

          <input
            type='email'
            name='email'
            placeholder='email@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${showEmailError === 'no error' && styles.no_error} ${
              showEmailError === 'error' && styles.error
            }`}
          />

          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <div className={styles.links_container}>
          <Link href='/login'>Login</Link>

          <Link href='/register'>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;
