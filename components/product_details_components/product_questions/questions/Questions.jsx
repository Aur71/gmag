import { useState } from 'react';
import Question from './question/Question';
import Pagination from '@/features/pagination/Pagination';
import styles from './Questions.module.scss';
import search from './functions/search';
import sortQuestions from './functions/sortQuestions';

const Questions = ({ questions, sortBy, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const fistItemIndex = lastItemIndex - itemsPerPage;
  const searchedQuestions = search(questions, searchTerm);
  const sortedQuestions = sortQuestions(searchedQuestions, sortBy);
  const paginatedQuestions = sortedQuestions.slice(
    fistItemIndex,
    lastItemIndex
  );

  return (
    <div className={styles.questions}>
      {paginatedQuestions.map((question) => {
        return <Question key={question._id} question={question} />;
      })}
      {questions.length > itemsPerPage ? (
        <Pagination
          totalItems={sortedQuestions.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginationStyles={{ marginTop: '20px' }}
        />
      ) : null}
    </div>
  );
};

export default Questions;
