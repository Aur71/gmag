import { useState, useRef, useEffect } from 'react';
import Header from './header/Header';
import AddQuestion from './add_question/AddQuestion';
import Filters from './filters/Filters';
import Questions from './questions/Questions';
import styles from './ProductQuestions.module.scss';

const ProductQuestions = ({ questions, onMount }) => {
  const productQuestionsRef = useRef(null);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuestions, setSearchQuestions] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  useEffect(() => {
    if (onMount && productQuestionsRef.current) {
      onMount(productQuestionsRef.current);
    }
  }, [onMount]);

  return (
    <section className={styles.product_questions} ref={productQuestionsRef}>
      <div className={styles.center}>
        <Header
          numOfQuestions={questions.length}
          showAddQuestion={showAddQuestion}
          setShowAddQuestion={setShowAddQuestion}
        />
        <AddQuestion
          showAddQuestion={showAddQuestion}
          setShowAddQuestion={setShowAddQuestion}
        />
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
