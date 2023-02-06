import styles from './AuthentificationForms.module.scss';
import { useState, useEffect } from 'react';
import { emailValidation } from '@/utils/emailValidation';
import { passwordValidation } from '@/utils/passwordValidation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { AiOutlineGoogle } from 'react-icons/ai';

const AuthentificationForm = ({ formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // CHECKING THE EMAIL
  const checkEmail = () => {
    const isEmailValid = emailValidation(email);

    if (typeof isEmailValid === 'string') {
      setEmailError(isEmailValid);
      setShowEmailError(true);
      return false;
    }

    setShowEmailError(false);
    setEmailError('');
    return true;
  };

  // CHECKING THE PASSWORD
  const checkPassword = () => {
    const isPasswordValid = passwordValidation(password);

    if (typeof isPasswordValid === 'string') {
      setPasswordError(isPasswordValid);
      setShowPasswordError(true);
      return false;
    }

    setShowPasswordError(false);
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();

    if (isEmailValid && isPasswordValid) {
      console.log('login / register the user');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowEmailError(false);
      setShowPasswordError(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [showEmailError, showPasswordError]);

  return (
    <div className={styles.form_wrapper}>
      <Link href='/' className={styles.logo}>
        <Image src={logo} alt='logo' priority={true} />
      </Link>

      <form className={styles.form}>
        <h1>{formType}</h1>

        <label htmlFor='email'>
          Email:{' '}
          <span className={`${showEmailError && styles.active}`}>
            {emailError}
          </span>
        </label>
        <input
          type='email'
          name='email'
          placeholder='email@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${showEmailError && styles.error}`}
        />

        <label htmlFor='password'>
          Password:{' '}
          <span className={`${showPasswordError && styles.active}`}>
            {passwordError}
          </span>
        </label>
        <input
          type='password'
          name='password'
          placeholder='QweAsd12!'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${showPasswordError && styles.error}`}
        />

        <button type='submit' onClick={handleSubmit}>
          {formType === 'login' ? 'Sign In' : 'Sign Up'}
        </button>

        <div className={styles.line}>
          <span></span>
          <span>or</span>
          <span></span>
        </div>

        <button className={styles.google_btn}>
          <span>
            <AiOutlineGoogle />
          </span>
          <span>Google</span>
        </button>
      </form>

      <div className={styles.links_container}>
        <Link href={`${formType === 'login' ? '/register' : '/login'}`}>
          {`${formType === 'login' ? 'Register' : 'Login'}`}
        </Link>

        <Link href='/password_recovery'>Forgot password?</Link>
      </div>
    </div>
  );
};

export default AuthentificationForm;
