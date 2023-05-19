import CartBtn from '../../card_components/cart_btn/CartBtn';
import styles from './PriceContainer.module.scss';

const PriceContainer = ({ product }) => {
  const { currentPrice, oldPrice } = product;

  return (
    <div className={styles.price_container}>
      <div>
        <p className={styles.current_price}>${currentPrice}</p>
        {oldPrice ? <p className={styles.old_price}>${oldPrice}</p> : null}
      </div>
      <CartBtn product={product} />
    </div>
  );
};

export default PriceContainer;
