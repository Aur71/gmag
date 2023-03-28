import { useState } from 'react';
import Header from './header/Header';
import Filters from './filters/Filters';
import Questions from './questions/Questions';
import styles from './ProductQuestions.module.scss';

const ProductQuestions = ({ questions }) => {
  const [sortBy, setSortBy] = useState(null);

  return (
    <section className={styles.product_questions}>
      <div className={styles.center}>
        <Header numOfQuestions={questions.length} />
        <Filters sortBy={sortBy} setSortBy={setSortBy} />
        <Questions questions={questions} />
      </div>
    </section>
  );
};

export default ProductQuestions;
