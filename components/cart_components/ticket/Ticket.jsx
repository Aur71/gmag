import styles from './Ticket.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Ticket = () => {
  return (
    <section className={styles.ticket}>
      <h2>Order summary</h2>

      <p>
        <span>Products cost:</span>
        <span>1999.99$</span>
      </p>

      <p>
        <span>Delivery cost:</span>
        <span>25$</span>
      </p>

      <h3>Total:</h3>
      <h4>2024.99$</h4>

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
