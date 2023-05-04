import Sort from '@/features/sort/Sort';
import Filter from '@/features/filter/Filter';
import MiniSearchbar from '@/features/mini_searchbar/MiniSearchbar';
import styles from './Filters.module.scss';

const sortOptions = ['Newest', 'Oldest', 'No. likes', 'No. comments'];
const filterOptions = [
  'All reviews',
  'My reviews',
  '5 stars reviews',
  '4 stars reviews',
  '3 stars reviews',
  '2 stars reviews',
  '1 star reviews',
];

const Filters = ({
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className={styles.filters}>
      <Sort
        activeSortBy={sortBy}
        setSortBy={setSortBy}
        options={sortOptions}
        optionsStyle={{ backgroundColor: 'white' }}
      />
      <Filter
        activeFilterBy={filterBy}
        setFilterBy={setFilterBy}
        options={filterOptions}
        optionsStyle={{ backgroundColor: 'white' }}
      />
      <MiniSearchbar search={searchTerm} setSearch={setSearchTerm} />
    </div>
  );
};

export default Filters;
