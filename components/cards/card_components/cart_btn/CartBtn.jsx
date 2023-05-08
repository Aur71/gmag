import styles from './CartBtn.module.scss';
import { FaOpencart } from 'react-icons/fa';

const CartBtn = ({ product }) => {
  const addToCart = () => {
    console.log(product);
  };

  return (
    <button className={styles.cart_btn} onClick={addToCart}>
      <FaOpencart className={styles.icon} />
    </button>
  );
};

export default CartBtn;
