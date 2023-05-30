import styles from './StockLevel.module.scss';

const StockLevel = ({ product }) => {
  const { stock } = product;
  const avaliable = stock >= 7;
  const limited = stock <= 6 && activeColor.stock >= 1;
  const outOfStock = stock <= 0;

  return (
    <p
      className={`
      ${styles.stock_level} 
      ${avaliable ? styles.avaliable : null} 
      ${limited ? styles.limited : null} 
      ${outOfStock ? styles.outOfStock : null}`}
    >
      {avaliable ? 'avaliable' : null}
      {limited ? 'limited' : null}
      {outOfStock ? 'outOfStock' : null}
    </p>
  );
};

export default StockLevel;
