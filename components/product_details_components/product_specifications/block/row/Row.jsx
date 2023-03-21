import styles from './Row.module.scss';

const Row = ({ spec }) => {
  return (
    <div className={styles.row}>
      <p>{spec?.key}</p>
      <p>{spec?.value}</p>
    </div>
  );
};

export default Row;
