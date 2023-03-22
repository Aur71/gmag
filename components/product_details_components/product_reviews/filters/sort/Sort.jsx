import { useState, useEffect, useRef } from 'react';
import styles from './Sort.module.scss';
import { FiChevronDown } from 'react-icons/fi';

const options = ['Newest', 'Oldest', 'No. likes', 'No. comments'];

const Sort = () => {
  const dropdownRef = useRef(null);
  const [sortBy, setSortBy] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortBy = (option) => {
    setSortBy(option);
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
          <span>{sortBy}</span>

          <FiChevronDown className={styles.icon} />
        </div>

        <div className={`${styles.options} ${showDropdown && styles.active}`}>
          <ul>
            {options.map((option) => {
              const key = `reviews_sort_${option}`;
              return (
                <li
                  key={key}
                  className={`${sortBy === option && styles.active}`}
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
