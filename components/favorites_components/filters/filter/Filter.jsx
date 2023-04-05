import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import { handleFilter } from '@/redux/reducers/favoritesSlice';
import { FiChevronDown } from 'react-icons/fi';

const options = [
  'All products',
  '5 star products',
  '4 star products',
  '3 star products',
  '2 star products',
  '1 star products',
];

const Filter = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { filter } = useSelector((state) => state.favorites);

  const handleFilterBy = (option) => {
    dispatch(handleFilter(option));
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
    <div className={styles.filter}>
      <label>Filter by:</label>

      <div
        className={`${styles.dropdown} ${showDropdown && styles.active}`}
        ref={dropdownRef}
      >
        <div
          className={styles.active_option}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>Filter</span>
          <span>{filter}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `favorites_filter_${option}`;
              return (
                <li
                  key={key}
                  className={`${filter === option && styles.active}`}
                  onClick={() => handleFilterBy(option)}
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
