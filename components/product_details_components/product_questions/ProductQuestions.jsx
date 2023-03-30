import { useState } from 'react';
import Header from './header/Header';
import Filters from './filters/Filters';
import Questions from './questions/Questions';
import styles from './ProductQuestions.module.scss';

const ProductQuestions = ({ questions }) => {
  const [sortBy, setSortBy] = useState(null);
  const [searchQuestions, setSearchQuestions] = useState('');

  return (
    <section className={styles.product_questions}>
      <div className={styles.center}>
        <Header numOfQuestions={questions.length} />
        <Filters
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchQuestions={searchQuestions}
          setSearchQuestions={setSearchQuestions}
        />
        <Questions
          questions={questions}
          sortBy={sortBy}
          searchQuestions={searchQuestions}
        />
      </div>
    </section>
  );
};

export default ProductQuestions;
