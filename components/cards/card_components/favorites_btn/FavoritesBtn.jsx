import styles from './FavoritesBtn.module.scss';
import { BsSuitHeart } from 'react-icons/bs';

const FavoritesBtn = ({ product }) => {
  const addToFavorites = () => {
    console.log(product);
  };

  return (
    <button className={styles.favorites_btn} onClick={addToFavorites}>
      <BsSuitHeart />
    </button>
  );
};

export default FavoritesBtn;
