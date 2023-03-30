import { useState, useRef } from 'react';
import Answer from './answer/Answer';
import Pagination from './pagination/Pagination';
import styles from './ReadAnswers.module.scss';

const ReadAnswers = ({ answers, showAnswers }) => {
  const answersRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const answersPerPage = 5;
  const lastAnswerIndex = currentPage * answersPerPage;
  const fistAnswerIndex = lastAnswerIndex - answersPerPage;
  const paginatedAnswers = answers.slice(fistAnswerIndex, lastAnswerIndex);

  return (
    <div
      className={`${styles.read_answers} ${showAnswers && styles.active}`}
      ref={answersRef}
    >
      {paginatedAnswers.map((answer) => {
        const key = `answer_${answer.id}`;
        return <Answer key={key} answer={answer} />;
      })}

      {answers.length > answersPerPage ? (
        <Pagination
          totalAnswers={answers.length}
          answersPerPage={answersPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default ReadAnswers;
