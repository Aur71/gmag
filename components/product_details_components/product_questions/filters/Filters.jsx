import Sort from './sort/Sort';
import Search from './search/Search';
import styles from './Filters.module.scss';

const Filters = ({
  sortBy,
  setSortBy,
  searchQuestions,
  setSearchQuestions,
}) => {
  return (
    <div className={styles.filters}>
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <Search
        searchQuestions={searchQuestions}
        setSearchQuestions={setSearchQuestions}
      />
    </div>
  );
};

export default Filters;
