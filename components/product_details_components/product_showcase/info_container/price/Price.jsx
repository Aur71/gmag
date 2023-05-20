import styles from './Price.module.scss';

const Price = ({ product, activeColor }) => {
  const { currentPrice, oldPrice } = product;
  const avaliable = activeColor.stock >= 7;
  const limited = activeColor.stock <= 6 && activeColor.stock >= 1;
  const outOfStock = activeColor.stock <= 0;

  return (
    <div className={styles.price}>
      <h2>Price</h2>

      <div>
        <h3>${currentPrice}</h3>
        {oldPrice ? <h4>${oldPrice}</h4> : null}
      </div>

      <h5
        className={`
        ${avaliable && styles.avaliable} 
        ${limited && styles.limited} 
        ${outOfStock && styles.outOfStock}
        `}
      >
        {avaliable ? 'avaliable' : null}
        {limited ? 'limited' : null}
        {outOfStock ? 'out of stock' : null}
      </h5>
    </div>
  );
};

export default Price;
