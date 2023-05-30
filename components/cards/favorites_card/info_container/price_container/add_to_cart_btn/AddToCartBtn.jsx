import styles from './AddToCartBtn.module.scss';
import { FaOpencart } from 'react-icons/fa';

const AddToCartBtn = () => {
  return (
    <button className={styles.add_to_cart_btn}>
      <FaOpencart className={styles.icon} />
      <span>Add to cart</span>
    </button>
  );
};

export default AddToCartBtn;
