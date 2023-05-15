// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Checkout = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return <div>Checkout</div>;
};

export default Checkout;
