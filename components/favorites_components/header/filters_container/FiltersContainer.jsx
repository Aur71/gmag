import { useDispatch, useSelector } from 'react-redux';
import Sort from '@/features/sort/Sort';
import Filter from '@/features/filter/Filter';
import MiniSearchbar from '@/features/mini_searchbar/MiniSearchbar';
import styles from './FiltersContainer.module.scss';
import {
  handleSortBy,
  handleFilterBy,
  handleSearchTerm,
} from '@/redux/reducers/favoritesSlice';

const sortByOptions = [
  'Increasing price',
  'Decreasing price',
  'No. reviews',
  'Discount %',
];
const filterByOptions = [
  'All products',
  '5 star products',
  '4 star products',
  '3 star products',
  '2 star products',
  '1 star products',
];

const FiltersContainer = () => {
  const dispatch = useDispatch();
  const { sortBy, filterBy, searchTerm } = useSelector(
    (state) => state.favorites
  );

  const dispatchSortBy = (option) => dispatch(handleSortBy(option));
  const dispatchFilterBy = (option) => dispatch(handleFilterBy(option));
  const dispatchSearchTerm = (searchTerm) =>
    dispatch(handleSearchTerm(searchTerm));

  return (
    <div className={styles.filters_container}>
      <Sort
        activeSortBy={sortBy}
        setSortBy={dispatchSortBy}
        options={sortByOptions}
        optionsStyle={{ backgroundColor: 'rgb(245, 245, 245)' }}
      />
      <Filter
        activeFilterBy={filterBy}
        setFilterBy={dispatchFilterBy}
        options={filterByOptions}
        optionsStyle={{ backgroundColor: 'rgb(245, 245, 245)' }}
      />
      <MiniSearchbar
        search={searchTerm}
        setSearch={dispatchSearchTerm}
        placeholder='Search products...'
      />
    </div>
  );
};

export default FiltersContainer;
