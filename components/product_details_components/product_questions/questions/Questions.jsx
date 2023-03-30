import { useState, useRef, useEffect } from 'react';
import Question from './question/Question';
import Pagination from './pagination/Pagination';
import styles from './Questions.module.scss';
import search from './functions/search';
import sortQuestions from './functions/sortQuestions';

const Questions = ({ questions, sortBy, searchQuestions }) => {
  const questionsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const lastQuestionIndex = currentPage * questionsPerPage;
  const fistQuestionIndex = lastQuestionIndex - questionsPerPage;

  useEffect(() => {
    const scrollToTop = () => {
      const target = questionsRef.current.offsetTop - 100;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    };
    scrollToTop();
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchedQuestions = search(questions, searchQuestions);
  const sortedQuestions = sortQuestions(searchedQuestions, sortBy);
  const paginatedQuestions = sortedQuestions.slice(
    fistQuestionIndex,
    lastQuestionIndex
  );

  return (
    <div className={styles.questions} ref={questionsRef}>
      {paginatedQuestions.map((question) => {
        const key = `question_${question.id}`;
        return <Question key={key} question={question} />;
      })}

      {questions.length > 5 ? (
        <Pagination
          totalQuestions={sortedQuestions.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          questionsPerPage={questionsPerPage}
        />
      ) : null}
    </div>
  );
};

export default Questions;
