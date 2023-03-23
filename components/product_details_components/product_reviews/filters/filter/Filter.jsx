import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { handleFilterReviews } from '@/redux/reducers/singleProductSlice';

const options = [
  'All reviews',
  '5 stars reviews',
  '4 stars reviews',
  '3 stars reviews',
  '2 stars reviews',
  '1 star reviews',
];

const Filter = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { filterReviews } = useSelector((state) => state.singleProduct);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortBy = (option) => {
    dispatch(handleFilterReviews(option));
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
    dispatch(handleFilterReviews(options[0]));
  }, [dispatch]);

  return (
    <div className={styles.filter}>
      <label>Filter:</label>

      <div
        className={`${styles.dropdown} ${showDropdown && styles.active}`}
        ref={dropdownRef}
      >
        <div
          className={styles.active_option}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>Filters</span>
          <span>{filterReviews}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `reviews_filter_${option}`;
              return (
                <li
                  key={key}
                  className={`${filterReviews === option && styles.active}`}
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

export default Filter;
