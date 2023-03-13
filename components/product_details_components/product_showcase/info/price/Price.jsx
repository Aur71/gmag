import styles from './Price.module.scss';

const Price = () => {
  return (
    <div className={styles.price}>
      <h2>Price</h2>

      <div className={styles.grid_container}>
        <div>
          <h3>$1999.99</h3>
          <h4>$2100.99</h4>
        </div>

        <button>All buying options</button>
      </div>
    </div>
  );
};

export default Price;
