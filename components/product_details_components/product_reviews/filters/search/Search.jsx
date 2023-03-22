import { useState } from 'react';
import styles from './Search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [closeSearch, setCloseSearch] = useState(false);

  const handleSearch = () => {
    const reduxStateSeach = '';

    if (!searchTerm) return;
    if (!reduxStateSeach) {
      // dispatch an action that updated the state
      setCloseSearch(true);
    } else {
      // dispatch an action that resets the redux state
      setSearchTerm('');
      setCloseSearch(false);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type='search'
        placeholder='Search review...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        {closeSearch ? <GrClose /> : <CiSearch />}
      </button>
    </div>
  );
};

export default Search;
