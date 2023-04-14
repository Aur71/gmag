import styles from './FavoriteCard.module.scss';

const FavoriteCard = ({ product }) => {
  console.log(product);

  return <div className={styles.favorite_card}>FavoriteCard</div>;
};

export default FavoriteCard;
