import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Sort.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { handleSortReviews } from '@/redux/reducers/singleProductSlice';

const options = ['Newest', 'Oldest', 'No. likes', 'No. comments'];

const Sort = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { sortReviews } = useSelector((state) => state.singleProduct);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortBy = (option) => {
    dispatch(handleSortReviews(option));
    setShowDropdown(false);
  };

  // CLOSES THE DROPDOWN WHEN CLICKED OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(handleSortReviews(options[0]));
  }, [dispatch]);

  return (
    <div className={styles.sort}>
      <label>Sort by:</label>

      <div
        className={`${styles.dropdown} ${showDropdown && styles.active}`}
        ref={dropdownRef}
      >
        <div
          className={styles.active_option}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>Sort</span>
          <span>{sortReviews}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `reviews_sort_${option}`;
              return (
                <li
                  key={key}
                  className={`${sortReviews === option && styles.active}`}
                  onClick={() => handleSortBy(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sort;
