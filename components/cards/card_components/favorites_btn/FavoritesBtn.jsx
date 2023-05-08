import styles from './FavoritesBtn.module.scss';
import { BsSuitHeart } from 'react-icons/bs';

const FavoritesBtn = () => {
  return (
    <button className={styles.favorites_btn}>
      <BsSuitHeart />
    </button>
  );
};

export default FavoritesBtn;
