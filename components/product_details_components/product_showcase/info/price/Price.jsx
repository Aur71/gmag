import styles from './Price.module.scss';

const Price = ({ currentPrice, oldPrice, activeColor }) => {
  const avaliable = activeColor.stock >= 7;
  const limited = activeColor.stock <= 6 && activeColor.stock >= 1;
  const outOfStock = activeColor.stock <= 0;

  return (
    <div className={styles.price}>
      <h2>Price:</h2>

      <div className={styles.price_container}>
        <h3>${currentPrice}</h3>
        {oldPrice ? <h4>${oldPrice}</h4> : null}
      </div>

      <h5>
        Stock:{' '}
        <span
          className={`${avaliable && styles.avaliable} ${
            limited && styles.limited
          } ${outOfStock && styles.outOfStock}`}
        >
          {avaliable ? 'avaliable' : null}
          {limited ? 'limited' : null}
          {outOfStock ? 'out of stock' : null}
        </span>
      </h5>
    </div>
  );
};

export default Price;
