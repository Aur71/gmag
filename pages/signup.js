import { useState } from 'react';
import { useSignup } from '@/hooks/useSignup';
import Logo from '@/components/authentication/logo/Logo';
import Title from '@/components/authentication/title/Title';
import AuthForm from '@/components/authentication/auth_form/AuthForm';
import Line from '@/components/authentication/line/Line';
import GoogleBtn from '@/components/authentication/google_btn/GoogleBtn';
import Links from '@/components/authentication/links/Links';
import styles from '@/styles/pages/Authentication.module.scss';

const links = [
  { href: '/login', textContent: 'Log in' },
  { href: '/password_recovery', textContent: 'Forgot password?' },
];

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const submitForm = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <Title title='Sign up' />
        <AuthForm
          submitForm={submitForm}
          isLoading={isLoading}
          buttonText='Signup'
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
        />
        <Line />
        <GoogleBtn />
      </div>
      <Links links={links} />
    </div>
  );
};

export default Signup;

Signup.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
