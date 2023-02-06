import PasswordRecoveryForm from '@/components/forms/authentification_forms/PasswordRecoveryForm';

const PasswordRecovery = () => {
  return <PasswordRecoveryForm />;
};

export default PasswordRecovery;

PasswordRecovery.getLayout = function PageLayout(page) {
  return <main className='page-center'>{page}</main>;
};
