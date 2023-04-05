import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { handleSearch } from '@/redux/reducers/favoritesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.favorites);
  const [searchTerm, setSearchTerm] = useState('');
  const [closeSearch, setCloseSearch] = useState(false);

  const dispatchSearch = () => {
    if (!searchTerm) return;
    if (!search) {
      dispatch(handleSearch(searchTerm));
      setCloseSearch(true);
    } else {
      dispatch(handleSearch(''));
      setSearchTerm('');
      setCloseSearch(false);
    }
  };

  return (
    <div className={styles.search}>
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

export default Search;
