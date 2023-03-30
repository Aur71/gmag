import { useState } from 'react';
import styles from './Search.module.scss';
import { GrClose } from 'react-icons/gr';
import { CiSearch } from 'react-icons/ci';

const Search = ({ searchQuestions, setSearchQuestions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [closeSearch, setCloseSearch] = useState(false);

  const handleSearch = () => {
    if (!searchTerm) return;
    if (!searchQuestions) {
      setSearchQuestions(searchTerm);
      setCloseSearch(true);
    } else {
      setSearchQuestions('');
      setSearchTerm('');
      setCloseSearch(false);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type='search'
        placeholder='Search question...'
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
