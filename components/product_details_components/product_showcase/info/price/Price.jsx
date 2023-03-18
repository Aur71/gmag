import styles from './Price.module.scss';

const Price = ({ currentPrice, oldPrice }) => {
  return (
    <div className={styles.price}>
      <h2>Price</h2>

      <div className={styles.grid_container}>
        <div>
          <h3>${currentPrice}</h3>
          {oldPrice ? <h4>${oldPrice}</h4> : null}
        </div>

        <button>All buying options</button>
      </div>
    </div>
  );
};

export default Price;
