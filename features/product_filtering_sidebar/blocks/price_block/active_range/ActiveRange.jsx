import styles from './ActiveRange.module.scss';

const ActiveRange = ({ min, max }) => {
  return (
    <div className={styles.active_range}>
      <p>{min}</p>
      <span>-</span>
      <p>{max}</p>
    </div>
  );
};

export default ActiveRange;
