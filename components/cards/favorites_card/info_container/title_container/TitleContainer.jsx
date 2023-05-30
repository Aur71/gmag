import Dropdown from './dropdown/Dropdown';
import Rating from '@/components/cards/card_components/rating/Rating';
import Link from 'next/link';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({ product }) => {
  const { type, _id, name } = product;
  const link = `/products/${type}/${_id}`;

  return (
    <div className={styles.title_container}>
      <Dropdown product={product} />
      <h4>
        <Link href={link}>{name}</Link>
      </h4>
      <Rating product={product} />
    </div>
  );
};

export default TitleContainer;
