import { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.scss';
import { FiChevronDown } from 'react-icons/fi';

const Filter = ({ activeFilterBy, setFilterBy, options, optionsStyle }) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterBy = (option) => {
    setFilterBy(option);
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
          <span>{activeFilterBy}</span>
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
                  className={`${activeFilterBy === option && styles.active}`}
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
