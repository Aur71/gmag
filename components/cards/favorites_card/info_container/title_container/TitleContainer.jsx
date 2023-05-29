import Rating from '@/components/cards/card_components/rating/Rating';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({ product }) => {
  const { name } = product;

  return (
    <div className={styles.title_container}>
      dropdown
      <h4>{name}</h4>
      <Rating product={product} />
    </div>
  );
};

export default TitleContainer;
