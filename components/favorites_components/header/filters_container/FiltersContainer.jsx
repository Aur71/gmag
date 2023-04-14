import { useDispatch, useSelector } from 'react-redux';
import Sort from '@/features/sort/Sort';
import Filter from '@/features/filter/Filter';
import MiniSearchbar from '@/features/mini_searchbar/MiniSearchbar';
import styles from './FiltersContainer.module.scss';
import {
  handleSortProducts,
  handleFilterProducts,
  handleSearchProducts,
} from '@/redux/reducers/favoritesSlice';

const sortByOptions = [
  'Newest',
  'Oldest',
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
  const { sortProducts, filterProducts, searchProducts } = useSelector(
    (state) => state.favorites
  );

  const dispatchSortProducts = (option) => dispatch(handleSortProducts(option));

  const dispatchFilterProducts = (option) =>
    dispatch(handleFilterProducts(option));

  const dispatchSearchProducts = (searchTerm) =>
    dispatch(handleSearchProducts(searchTerm));

  return (
    <div className={styles.filters_container}>
      <Sort
        activeSortBy={sortProducts}
        setSortBy={dispatchSortProducts}
        options={sortByOptions}
        optionsStyle={{ backgroundColor: 'rgb(245, 245, 245)' }}
      />
      <Filter
        activeFilterBy={filterProducts}
        setFilterBy={dispatchFilterProducts}
        options={filterByOptions}
        optionsStyle={{ backgroundColor: 'rgb(245, 245, 245)' }}
      />
      <MiniSearchbar
        search={searchProducts}
        setSearch={dispatchSearchProducts}
      />
    </div>
  );
};

export default FiltersContainer;
