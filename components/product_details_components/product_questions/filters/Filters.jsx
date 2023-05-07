import Sort from '@/features/sort/Sort';
import MiniSearchbar from '@/features/mini_searchbar/MiniSearchbar';
import styles from './Filters.module.scss';

const sortOptions = ['Newest', 'Oldest', 'No. answers'];

const Filters = ({ sortBy, setSortBy, searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.filters}>
      <Sort
        options={sortOptions}
        activeSortBy={sortBy}
        setSortBy={setSortBy}
        optionsStyle={{ backgroundColor: 'white' }}
      />
      <MiniSearchbar
        search={searchTerm}
        setSearch={setSearchTerm}
        miniSearchbarStyle={{
          gridColumn: 'auto',
          '@media (maxWidth: 520px)': {
            gridColumn: '2 / -1',
          },
        }}
      />
    </div>
  );
};

export default Filters;
