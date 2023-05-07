import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Searchbar.module.scss';
import { CiSearch } from 'react-icons/ci';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const submitSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={submitSearch}>
        <CiSearch />
      </button>
    </div>
  );
};

export default Searchbar;
