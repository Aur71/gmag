import FavoriteCard from './favorite_card/FavoriteCard';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <section className={styles.cards}>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </section>
  );
};

export default Cards;
