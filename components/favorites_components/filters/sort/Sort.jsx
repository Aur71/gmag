import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Sort.module.scss';
import { handleSort } from '@/redux/reducers/favoritesSlice';
import { FiChevronDown } from 'react-icons/fi';

const options = [
  'Newest',
  'Oldest',
  'Increasing price',
  'Decreasing price',
  'No. reviews',
  'Discount %',
];

const Sort = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { sort } = useSelector((state) => state.favorites);

  const handleSortBy = (option) => {
    dispatch(handleSort(option));
    setShowDropdown(false);
  };

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
          <span>{sort}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `favorites_sort_${option}`;
              return (
                <li
                  key={key}
                  className={`${sort === option && styles.active}`}
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
