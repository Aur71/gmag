import Sort from './sort/Sort';
import Filter from './filter/Filter';
import Search from './search/Search';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Sort />
      <Filter />
      <Search />
    </div>
  );
};

export default Filters;
