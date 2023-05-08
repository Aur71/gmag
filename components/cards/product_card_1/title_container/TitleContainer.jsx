import Link from 'next/link';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({ product }) => {
  const { name, type, _id } = product;
  const link = `/products/${type}/${_id}`;

  return (
    <h3 className={styles.title_container}>
      <Link href={link}>{name}</Link>
    </h3>
  );
};

export default TitleContainer;
