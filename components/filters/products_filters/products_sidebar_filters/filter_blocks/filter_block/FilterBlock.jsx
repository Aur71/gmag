import styles from './FilterBlock.module.scss';
import { useState, useRef } from 'react';
import BlockHeader from '../block_components/block_header/BlockHeader';
import BlockSearchbar from '../block_components/block_searchbar/BlockSearchbar';

const FilterBlock = ({ name, options }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterBlockRef = useRef(null);

  const filteredOptions = options.filter((option) => {
    const { name } = option;
    if (name === null || name === undefined) return false;
    return (
      !searchTerm ||
      name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className={styles.filter_block} ref={filterBlockRef}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        {options.length > 7 ? (
          <BlockSearchbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
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
