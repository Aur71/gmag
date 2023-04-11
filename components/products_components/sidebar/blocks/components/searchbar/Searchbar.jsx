import styles from './Searchbar.module.scss';

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchbar}>
      <input
        type='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
