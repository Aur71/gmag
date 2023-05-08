import ImgContainer from './img_container/ImgContainer';
import TitleContainer from './title_container/TitleContainer';
import PriceContainer from './price_container/PriceContainer';
import Rating from '../card_components/rating/Rating';
import styles from './ProductCard1.module.scss';

const ProductCard1 = ({ product }) => {
  return (
    <article className={styles.product_card_1}>
      <ImgContainer product={product} />
      <TitleContainer product={product} />
      <Rating product={product} />
      <PriceContainer product={product} />
    </article>
  );
};

export default ProductCard1;
