import PathContainer from './path_container/PathContainer';
import ImgContainer from './img_container/ImgContainer';
import InfoContainer from './info_container/InfoContainer';
import styles from './ProductShowcase.module.scss';

const ProductShowcase = ({ product }) => {
  return (
    <section className={styles.product_showcase}>
      <div className={styles.center}>
        <PathContainer />
        <ImgContainer product={product} />
        <InfoContainer product={product} />
      </div>
    </section>
  );
};

export default ProductShowcase;
