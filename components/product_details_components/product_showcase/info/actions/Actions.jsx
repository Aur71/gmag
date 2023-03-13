import styles from './Actions.module.scss';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.cart_btn}>Add to cart</button>
      <button className={styles.favorite_btn}>Add to favorite</button>
    </div>
  );
};

export default Actions;
