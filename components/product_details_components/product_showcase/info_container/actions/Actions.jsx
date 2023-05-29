import { useAddToFavorites } from '@/hooks/favorites/useAddToFavorites';
import styles from './Actions.module.scss';

const Actions = ({ product }) => {
  const { addToFavorites, favoritesLoading } = useAddToFavorites();

  const addToCart = () => {
    console.log(product);
  };

  return (
    <div className={styles.actions}>
      <button className={styles.cart_btn} onClick={addToCart}>
        Add to cart
      </button>
      <button
        className={styles.favorite_btn}
        onClick={() => addToFavorites(product._id)}
        disabled={favoritesLoading}
      >
        Add to favorite
      </button>
    </div>
  );
};

export default Actions;
