import AuthentificationForm from '@/components/forms/authentification_form/AuthentificationForm';

const Login = () => {
  return <AuthentificationForm formType='login' />;
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
