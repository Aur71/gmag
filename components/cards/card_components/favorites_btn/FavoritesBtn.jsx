import { useAddToFavorites } from '@/hooks/favorites/useAddToFavorites';
import styles from './FavoritesBtn.module.scss';
import { BsSuitHeart } from 'react-icons/bs';

const FavoritesBtn = ({ product }) => {
  const { addToFavorites, favoritesLoading } = useAddToFavorites();

  return (
    <button
      className={styles.favorites_btn}
      onClick={() => addToFavorites(product._id)}
      disabled={favoritesLoading}
    >
      <BsSuitHeart />
    </button>
  );
};

export default FavoritesBtn;
