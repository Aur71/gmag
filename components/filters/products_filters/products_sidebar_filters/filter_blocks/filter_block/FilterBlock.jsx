import styles from './FilterBlock.module.scss';
import { useState, useEffect, useRef } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const FilterBlock = ({ name, options }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBlock, setShowBlock] = useState(true);
  const filterBlockRef = useRef(null);

  useEffect(() => {
    const filterBlockChildren = filterBlockRef.current.children;
    const btnHeight = filterBlockChildren[0].getBoundingClientRect().height;
    const optionsHeight = filterBlockChildren[1].getBoundingClientRect().height;

    if (!showBlock) {
      filterBlockRef.current.style.height = `${btnHeight}px`;
    } else {
      filterBlockRef.current.style.height = `${btnHeight + optionsHeight}px`;
    }
  }, [showBlock]);

  const filteredOptions = options
    .filter((option) => {
      const { name } = option;
      if (name === null || name === undefined) return false;
      return (
        !searchTerm ||
        name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      const nameA = a.name ? a.name.toString().toLowerCase() : '';
      const nameB = b.name ? b.name.toString().toLowerCase() : '';

      if (typeof a.name === 'number' && typeof b.name === 'number') {
        return a.name - b.name;
      }

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  return (
    <div className={styles.filter_block} ref={filterBlockRef}>
      <button onClick={() => setShowBlock(!showBlock)}>
        {name}
        <RxCaretUp className={`${styles.icon} ${!showBlock && styles.down}`} />
      </button>

      <div className={styles.options}>
        {options.length > 7 ? (
          <input
            type='search'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        ) : null}

        <ul>
          {filteredOptions.map((option, index) => {
            return (
              <li key={index}>
                <label>
                  <input type='checkbox' />
                  {option.name} <span>({option.count})</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterBlock;
