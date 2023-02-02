import styles from './AuthentificationForm.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { AiOutlineGoogle } from 'react-icons/ai';

const AuthentificationForm = ({ formType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='page-center'>
      <div className={styles.form_wrapper}>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='logo' priority={true} />
        </Link>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>{formType}</h1>

          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' placeholder='email@gmail.com' />

          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' placeholder='QweAsd12!' />

          <button type='submit'>
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

        <Link
          href={`${formType === 'login' ? '/register' : '/login'}`}
          className={styles.auth_link}
        >
          {`${formType === 'login' ? 'Register' : 'Login'}`}
        </Link>
      </div>
    </div>
  );
};

export default AuthentificationForm;
