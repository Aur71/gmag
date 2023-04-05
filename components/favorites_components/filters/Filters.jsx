import Sort from './sort/Sort';
import Filter from './filter/Filter';
import Search from './search/Search';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <section className={styles.filters}>
      <Sort />
      <Filter />
      <Search />
    </section>
  );
};

export default Filters;
