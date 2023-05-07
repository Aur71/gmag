import { useDispatch } from 'react-redux';
import Sort from '@/features/sort/Sort';
import styles from './SortContainer.module.scss';
import { mainClr } from '@/styles/themes/themes.module.scss';
import { FiSliders } from 'react-icons/fi';
import { openProductFilteringSidebar } from '@/redux/reducers/productFilteringSidebarSlice';

const sortOptions = [
  'Most popular',
  'Increasing price',
  'Decreasing price',
  'Increasing rating',
  'Decreasing rating',
  'No. reviews',
  'Discount %',
];

const SortContainer = ({ sortBy, setSortBy }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.sort_container}>
      <Sort
        options={sortOptions}
        activeSortBy={sortBy}
        setSortBy={setSortBy}
        optionsStyle={{ backgroundColor: mainClr }}
      />
      <button onClick={() => dispatch(openProductFilteringSidebar())}>
        <FiSliders className={styles.icon} />
        Filters
      </button>
    </div>
  );
};

export default SortContainer;
