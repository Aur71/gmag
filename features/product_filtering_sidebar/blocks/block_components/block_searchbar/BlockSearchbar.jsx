import styles from './BlockSearchbar.module.scss';

const BlockSearchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.block_searchbar}>
      <input
        type='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default BlockSearchbar;
