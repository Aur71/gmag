import { useState } from 'react';
import styles from './Price.module.scss';

const Price = ({ currentPrice, oldPrice, totalStock }) => {
  const [showStock, setShowStock] = useState(false);

  return (
    <div className={styles.price}>
      <h2>Price</h2>

      <div className={styles.grid_container}>
        <div>
          <h3>${currentPrice}</h3>
          {oldPrice ? <h4>${oldPrice}</h4> : null}
        </div>

        <button
          onMouseOver={() => setShowStock(true)}
          onMouseLeave={() => setShowStock(false)}
        >
          Stock:
          {totalStock > 1 ? (
            <span className={styles.green}>avaliable</span>
          ) : (
            <span className={styles.grey}>out of stock</span>
          )}
          <span
            className={`${styles.current_stock} ${showStock && styles.active}`}
          >
            {totalStock}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Price;
