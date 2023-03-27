import Header from './header/Header';
import styles from './ProductQuestions.module.scss';

const ProductQuestions = () => {
  return (
    <section className={styles.product_questions}>
      <div className={styles.center}>
        <Header />
      </div>
    </section>
  );
};

export default ProductQuestions;
