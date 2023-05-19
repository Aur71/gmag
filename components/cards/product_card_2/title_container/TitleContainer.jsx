import Link from 'next/link';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({ product }) => {
  const { productType, _id, name } = product;
  const link = `/products/${productType}/${_id}`;

  return (
    <h2 className={styles.title_container}>
      <Link href={link}>{name}</Link>
    </h2>
  );
};

export default TitleContainer;
