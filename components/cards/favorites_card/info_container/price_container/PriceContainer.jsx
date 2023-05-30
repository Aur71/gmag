import StockLevel from './stock_level/StockLevel';
import AddToCartBtn from './add_to_cart_btn/AddToCartBtn';
import RemoveBtn from './remove_btn/RemoveBtn';
import styles from './PriceContainer.module.scss';

const PriceContainer = ({ product, currentProductList }) => {
  const { oldPrice, currentPrice } = product;

  return (
    <div className={styles.price_container}>
      <StockLevel product={product} />

      <div className={styles.price_wrapper}>
        {oldPrice ? <h6>${oldPrice}</h6> : null}
        <h5>${currentPrice}</h5>
      </div>

      <div className={styles.actions_wrapper}>
        <AddToCartBtn product={product} />
        <RemoveBtn product={product} currentProductList={currentProductList} />
      </div>
    </div>
  );
};

export default PriceContainer;
