import ImgContainer from './img_container/ImgContainer';
import InfoContainer from './info_container/InfoContainer';
import styles from './FavoritesCard.module.scss';

const FavoritesCard = ({ product }) => {
  return (
    <div className={styles.favorites_card}>
      <ImgContainer product={product} />
      <InfoContainer product={product} />
    </div>
  );
};

export default FavoritesCard;
