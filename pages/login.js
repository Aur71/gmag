import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useLogin } from '@/hooks/useLogin';
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
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const submitForm = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (user) router.push('/account');
  }, [user, router]);

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <Title title='Log in' />
        <AuthForm
          submitForm={submitForm}
          isLoading={isLoading}
          buttonText='Login'
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

export default Login;

Login.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
