// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const privacyPolicy = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return <div>privacyPolicy</div>;
};

export default privacyPolicy;
