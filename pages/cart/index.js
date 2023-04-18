import { useSelector } from 'react-redux';
import Title from '@/components/cart_components/title/Title';
import Cards from '@/components/cart_components/cards/Cards';
import Ticket from '@/components/cart_components/ticket/Ticket';
import Recommendations from '@/components/cart_components/recommendations/Recommendations';
// import axios from 'axios';
import styles from '../../styles/pages/Cart.module.scss';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={styles.cart}>
      <div className={styles.center}>
        <Title />
        <Cards />
        <Ticket />
        {cart.length ? <Recommendations /> : null}
      </div>
    </div>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}/${params.id}`);
    const data = ['fetch user cart data'];

    // DISPATCH THE ACTION TO UPDATE THE REDUX STATE WITH THE FETCHED DATA

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};
