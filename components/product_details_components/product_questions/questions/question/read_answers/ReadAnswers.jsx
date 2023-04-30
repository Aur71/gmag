import { useState } from 'react';
import Answer from './answer/Answer';
import Pagination from '@/features/pagination/Pagination';
import styles from './ReadAnswers.module.scss';

const ReadAnswers = ({ answers, showAnswers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastItemIndex = currentPage * itemsPerPage;
  const fistItemIndex = lastItemIndex - itemsPerPage;
  const paginatedAnswers = answers.slice(fistItemIndex, lastItemIndex);

  // add a way to delete your answer

  return (
    <div className={`${styles.read_answers} ${showAnswers && styles.active}`}>
      {paginatedAnswers.map((answer) => {
        return <Answer key={answer._id} answer={answer} />;
      })}

      {answers.length > itemsPerPage ? (
        <Pagination
          totalItems={answers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default ReadAnswers;
