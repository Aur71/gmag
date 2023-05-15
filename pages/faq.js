// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const faq = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return <div>faq</div>;
};

export default faq;
