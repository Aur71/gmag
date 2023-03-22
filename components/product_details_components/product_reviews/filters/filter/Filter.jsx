import { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.scss';
import { FiChevronDown } from 'react-icons/fi';

const options = [
  'All reviews',
  '5 stars reviews',
  '4 stars reviews',
  '3 stars reviews',
  '2 stars reviews',
  '1 star reviews',
];

const Filter = () => {
  const dropdownRef = useRef(null);
  const [filter, setFilter] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortBy = (option) => {
    setFilter(option);
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
          <span>{filter}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `reviews_filter_${option}`;
              return (
                <li
                  key={key}
                  className={`${filter === option && styles.active}`}
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
