import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Searchbar from '../components/searchbar/Searchbar';
import styles from './SpecificationFilter.module.scss';
import {
  addFilter,
  removeFilter,
  addInitialFilter,
  removeInitialFilter,
} from '@/redux/reducers/filtersSidebarSlice';

const SpecificationFilter = ({ name, options }) => {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state) => state.filtersSidebar);
  const [searchTerm, setSearchTerm] = useState('');
  const filter = { name, options };

  const filteredOptions = options.filter((option) => {
    const optionName = option.optionName.toString().toLowerCase();
    if (optionName === null || optionName === undefined) return false;
    return (
      !searchTerm || optionName.includes(searchTerm.toString().toLowerCase())
    );
  });

  const handleCheckbox = (e, option) => {
    if (e.target.checked) {
      dispatch(addFilter({ name, option }));
      dispatch(addInitialFilter(filter));
      return;
    }
    dispatch(removeFilter({ name, option }));
    dispatch(removeInitialFilter(filter));
  };

  return (
    <div className={styles.specification_filter}>
      <Header name={name} dependencies={activeFilters} />

      <div className={styles.options}>
        {options.length > 7 ? (
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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

export default SpecificationFilter;
