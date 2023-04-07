import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/components/layout/loading/Loading';
import Title from '@/components/cart_components/title/Title';
import Cards from '@/components/cart_components/cards/Cards';
import Ticket from '@/components/cart_components/ticket/Ticket';
import Recommendations from '@/components/cart_components/recommendations/Recommendations';
// import axios from 'axios';
import styles from '../../styles/pages/Cart.module.scss';
import {
  handleIsLoading,
  handleError,
  handleCart,
} from '@/redux/reducers/cartSlice';

// TEMP DATA
import { userData } from '../../data/user-data';

const Cart = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(handleIsLoading(true));
        // const response = await axios.get(
        //   'https://jsonplaceholder.typicode.com/todos/1'
        // );
        dispatch(handleCart(userData.cart));
        dispatch(handleIsLoading(false));
      } catch (err) {
        dispatch(handleError(err.message));
        dispatch(handleIsLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.cart}>
      <div className={styles.center}>
        <Title />
        <Cards />
        <Ticket />
        <Recommendations />
      </div>
    </div>
  );
};

export default Cart;
