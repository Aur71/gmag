import { useDispatch } from 'react-redux';
import Sort from '@/features/sort/Sort';
import styles from './Filters.module.scss';
import { handleFilters } from '@/redux/reducers/layoutSlice';

const sortOptions = [
  'Most popular',
  'Increasing price',
  'Decreasing price',
  'Increasing rating',
  'Decreasing rating',
  'No. reviews',
  'Discount %',
];

const Filters = ({ sortBy, setSortBy }) => {
  const dispatch = useDispatch();

  return (
    <section className={styles.filters}>
      <Sort
        activeSortBy={sortBy}
        setSortBy={setSortBy}
        options={sortOptions}
        optionsStyle={{ backgroundColor: '#f2f2f5' }}
      />

      <button onClick={() => dispatch(handleFilters(true))}>Filters</button>
    </section>
  );
};

export default Filters;
