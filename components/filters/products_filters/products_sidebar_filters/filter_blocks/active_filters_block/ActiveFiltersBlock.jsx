import { useSelector, useDispatch } from 'react-redux';
import {
  removeFilter,
  clearFilters,
} from '@/redux/reducers/filtersSidebarSlice';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './ActiveFiltersBlock.module.scss';
import { IoClose } from 'react-icons/io5';

const ActiveFiltersBlock = () => {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state) => state.filtersSidebar);

  return (
    <div className={styles.active_filters_block}>
      <BlockHeader name='Active filters' dependencies={activeFilters} />

      <div className={styles.active_filters_container}>
        <button onClick={() => dispatch(clearFilters())}>
          Clear all filters
        </button>

        <ul>
          {activeFilters.map((item) => {
            const { filterName, options } = item;

            return (
              <li key={filterName}>
                <h5>{filterName}:</h5>

                {options.map((option, index) => {
                  const obj = {
                    name: filterName,
                    option: {
                      optionName: option,
                    },
                  };

                  return (
                    <button
                      key={index}
                      onClick={() => dispatch(removeFilter(obj))}
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
