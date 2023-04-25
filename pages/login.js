import { useState } from 'react';
import Logo from '@/components/authentication/logo/Logo';
import Title from '@/components/authentication/title/Title';
import AuthForm from '@/components/authentication/auth_form/AuthForm';
import Line from '@/components/authentication/line/Line';
import GoogleBtn from '@/components/authentication/google_btn/GoogleBtn';
import Links from '@/components/authentication/links/Links';
import styles from '@/styles/pages/Authentication.module.scss';

const links = [
  { href: '/signup', textContent: 'Sign up' },
  { href: '/password_recovery', textContent: 'Forgot password?' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <Title title='Log in' />
        <AuthForm
          submitForm={submitForm}
          buttonText='Login'
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailError={emailError}
          passwordError={passwordError}
        />
        <Line />
        <GoogleBtn />
      </div>
      <Links links={links} />
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
