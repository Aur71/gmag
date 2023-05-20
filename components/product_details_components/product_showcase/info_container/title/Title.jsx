import styles from './Title.module.scss';

const Title = ({ product }) => {
  return <h1 className={styles.title}>{product.name}</h1>;
};

export default Title;
