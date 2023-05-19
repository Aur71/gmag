import ImgContainer from './img_container/ImgContainer';
import TitleContainer from './title_container/TitleContainer';
import Rating from '../card_components/rating/Rating';
import PriceContainer from './price_container/PriceContainer';
import styles from './ProductCard2.module.scss';

const ProductCard2 = ({ product }) => {
  return (
    <article className={styles.product_card_2}>
      <ImgContainer product={product} />
      <div className={styles.info_container}>
        <TitleContainer product={product} />
        <Rating product={product} />
        <PriceContainer product={product} />
      </div>
    </article>
  );
};

export default ProductCard2;
