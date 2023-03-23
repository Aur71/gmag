import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { handleSearchReviews } from '@/redux/reducers/singleProductSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { searchReviews } = useSelector((state) => state.singleProduct);
  const [searchTerm, setSearchTerm] = useState('');
  const [closeSearch, setCloseSearch] = useState(false);

  const handleSearch = () => {
    if (!searchTerm) return;
    if (!searchReviews) {
      dispatch(handleSearchReviews(searchTerm));
      setCloseSearch(true);
    } else {
      dispatch(handleSearchReviews(''));
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
