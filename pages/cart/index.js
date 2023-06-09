import Title from '@/components/cart_components/title/Title';
import Cards from '@/components/cart_components/cards/Cards';
import Ticket from '@/components/cart_components/ticket/Ticket';
import axios from 'axios';
import styles from '../../styles/pages/Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.center}>
        <Title />
        <Cards />
        <Ticket />
      </div>
    </div>
  );
};

export default Cart;
