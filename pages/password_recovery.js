import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Logo from '@/components/authentication/logo/Logo';
import Title from '@/components/authentication/title/Title';
import RecoveryForm from '@/components/authentication/recovery_form/RecoveryForm';
import Links from '@/components/authentication/links/Links';
import styles from '@/styles/pages/Authentication.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const links = [
  { href: '/login', textContent: 'Log in' },
  { href: '/signup', textContent: 'Sign up' },
];

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    setEmailError('');

    dispatch(
      addNotification({
        type: 'error',
        message: 'This feature is under development.',
      })
    );
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <Title title='Recovery' />
        <RecoveryForm
          submitForm={submitForm}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
        />
      </div>
      <Links links={links} />
    </div>
  );
};

export default PasswordRecovery;

PasswordRecovery.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
