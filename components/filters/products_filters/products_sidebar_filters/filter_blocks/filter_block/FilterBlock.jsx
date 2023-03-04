import styles from './FilterBlock.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/redux/reducers/filtersSidebarSlice';
import BlockHeader from '../block_components/block_header/BlockHeader';
import BlockSearchbar from '../block_components/block_searchbar/BlockSearchbar';

const FilterBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter((option) => {
    const optionName = option.optionName.toString().toLowerCase();
    if (optionName === null || optionName === undefined) return false;
    return (
      !searchTerm || optionName.includes(searchTerm.toString().toLowerCase())
    );
  });

  const handleCheckbox = (e, option) => {
    if (e.target.checked) return dispatch(addFilter({ name, option }));
    dispatch(removeFilter({ name, option }));
  };

  return (
    <div className={styles.filter_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        {options.length > 7 ? (
          <BlockSearchbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ) : null}

        <ul>
          {filteredOptions.map((option) => {
            const { optionName, count } = option;
            const id = `${name}_${optionName}`;

            return (
              <li key={optionName}>
                <label>
                  <input
                    type='checkbox'
                    onChange={(e) => handleCheckbox(e, option)}
                    id={id}
                  />
                  {optionName} <span>({count})</span>
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
