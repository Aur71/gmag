import { useState } from 'react';
import styles from './MiniSearchbar.module.scss';
import { CiSearch } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';

const MiniSearchbar = ({ search, setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [closeSearch, setCloseSearch] = useState(false);

  const dispatchSearch = () => {
    if (!searchTerm) return;
    if (!search) {
      setSearch(searchTerm);
      setCloseSearch(true);
    } else {
      setSearch('');
      setSearchTerm('');
      setCloseSearch(false);
    }
  };

  return (
    <div className={styles.mini_searchbar}>
      <input
        type='search'
        placeholder='Search product...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={dispatchSearch}>
        {closeSearch ? <GrClose /> : <CiSearch />}
      </button>
    </div>
  );
};

export default MiniSearchbar;
