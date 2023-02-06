import AuthentificationForm from '@/components/forms/authentification_forms/AuthentificationForm';

const Login = () => {
  return <AuthentificationForm formType='login' />;
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
