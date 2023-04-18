import { useSelector } from 'react-redux';
import styles from './Title.module.scss';

const Title = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <h1 className={styles.title}>
      your cart <span>({cart.length})</span>
    </h1>
  );
};

export default Title;
