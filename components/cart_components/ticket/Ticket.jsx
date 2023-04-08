import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Ticket.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { updateTicket } from '@/redux/reducers/cartSlice';

const Ticket = () => {
  const dispatch = useDispatch();
  const { productsCost, deliveryCost, totalCost, cart } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(updateTicket());
  }, [cart, dispatch]);

  return (
    <section className={styles.ticket}>
      <h2>Order summary</h2>

      <p>
        <span>Products cost:</span>
        <span>{productsCost}$</span>
      </p>

      <p>
        <span>Delivery cost:</span>
        <span>{deliveryCost}$</span>
      </p>

      <h3>Total:</h3>
      <h4>{totalCost}$</h4>

      <button>
        <span>
          <HiOutlineChevronDoubleRight />
        </span>

        <span>continue</span>
      </button>
    </section>
  );
};

export default Ticket;
