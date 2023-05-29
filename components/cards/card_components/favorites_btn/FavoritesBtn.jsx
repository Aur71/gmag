import { useDispatch, useSelector } from 'react-redux';
import styles from './FavoritesBtn.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import { addProductToFavorites } from '@/redux/reducers/favoritesSlice';

const FavoritesBtn = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.favorites);

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
    <button
      className={styles.favorites_btn}
      onClick={addToFavorites}
      disabled={loading}
    >
      <BsSuitHeart />
    </button>
  );
};

export default FavoritesBtn;
