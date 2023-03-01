import { useSelector, useDispatch } from 'react-redux';
import { removeFilter, clearFilters } from '@/redux/reducers/productsSlice';
import styles from './ActiveFiltersBlock.module.scss';
import BlockHeader from '../block_components/block_header/BlockHeader';
import { IoClose } from 'react-icons/io5';

const ActiveFiltersBlock = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.products);

  const dispatchRemoveFilter = (name, optionName) => {
    const objectFormat = { name, option: { optionName } };
    dispatch(removeFilter(objectFormat));
  };

  return (
    <div className={styles.active_filters_block}>
      <BlockHeader name='Active filters' dependencies={filters} />

      <div className={styles.active_filters_container}>
        <button onClick={() => dispatch(clearFilters())}>
          Clear all filters
        </button>

        <ul>
          {filters.map((item) => {
            const { filterName, options } = item;
            return (
              <li key={filterName}>
                <h5>{filterName}:</h5>

                {options.map((option, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => dispatchRemoveFilter(filterName, option)}
                    >
                      <span>{option}</span>
                      <IoClose className={styles.icon} />
                    </button>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActiveFiltersBlock;
