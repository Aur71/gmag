import styles from './Actions.module.scss';

const Actions = ({ product }) => {
  const addToCart = () => {
    console.log(product);
  };
  const addToFavorites = () => {
    console.log(product);
  };

  return (
    <div className={styles.actions}>
      <button className={styles.cart_btn} onClick={addToCart}>
        Add to cart
      </button>
      <button className={styles.favorite_btn} onClick={addToFavorites}>
        Add to favorite
      </button>
    </div>
  );
};

export default Actions;
