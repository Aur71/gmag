import AuthentificationForm from '@/components/forms/authentification_forms/AuthentificationForm';

const Register = () => {
  return <AuthentificationForm formType='register' />;
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
