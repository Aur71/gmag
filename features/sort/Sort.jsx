import { useState, useEffect, useRef } from 'react';
import styles from './Sort.module.scss';
import { FiChevronDown } from 'react-icons/fi';

const Sort = ({ activeSortBy, setSortBy, options, optionsStyle }) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortBy = (option) => {
    setSortBy(option);
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
          <span>{activeSortBy}</span>
          <FiChevronDown className={styles.icon} />
        </div>

        <div
          className={`${styles.options} ${showDropdown && styles.active}`}
          style={optionsStyle}
        >
          <ul>
            {options.map((option) => {
              return (
                <li
                  key={option}
                  className={`${activeSortBy === option && styles.active}`}
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
