import { useDispatch, useSelector } from 'react-redux';
import styles from './Actions.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import { addProductToFavorites } from '@/redux/reducers/favoritesSlice';

const Actions = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const favoritesLoading = useSelector((state) => state.favorites.loading);

  const addToCart = () => {
    console.log(product);
  };
  const addToFavorites = () => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
    dispatch(addProductToFavorites({ _id: product._id }));
  };

  return (
    <div className={styles.actions}>
      <button className={styles.cart_btn} onClick={addToCart}>
        Add to cart
      </button>
      <button
        className={styles.favorite_btn}
        onClick={addToFavorites}
        disabled={favoritesLoading}
      >
        Add to favorite
      </button>
    </div>
  );
};

export default Actions;
