import Sort from './sort/Sort';
import Search from './search/Search';
import styles from './Filters.module.scss';

const Filters = ({ sortBy, setSortBy }) => {
  return (
    <div className={styles.filters}>
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <Search />
    </div>
  );
};

export default Filters;
