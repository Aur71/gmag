import styles from '../../styles/pages/Cart.module.scss';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Cart = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return (
    <div className={styles.cart}>
      <div className={styles.center}></div>
    </div>
  );
};

export default Cart;
