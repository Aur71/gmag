import styles from './Actions.module.scss';

const Actions = ({ totalStock }) => {
  return (
    <div className={styles.actions}>
      <button
        className={`${styles.cart_btn} ${!totalStock && styles.disabled}`}
        // When cliked if totalStock === 0 add a notification
      >
        Add to cart
      </button>
      <button className={styles.favorite_btn}>Add to favorite</button>
      <button className={styles.all_buying_options_btn}>
        All buying options
      </button>
    </div>
  );
};

export default Actions;
