import { useSelector, useDispatch } from 'react-redux';
import {
  removeFilter,
  clearFilters,
} from '@/redux/reducers/filtersSidebarSlice';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './ActiveFiltersBlock.module.scss';
import { IoClose } from 'react-icons/io5';
import {
  removePriceFilter,
  removeRatingFilter,
} from '@/redux/reducers/filtersSidebarSlice';

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
            if (item.filterName === 'Price') {
              const { filterName, min, max } = item;

              return (
                <li key={filterName}>
                  <h5>{filterName}:</h5>
                  <button onClick={() => dispatch(removePriceFilter())}>
                    {min}$ - {max}$ <IoClose className={styles.icon} />
                  </button>
                </li>
              );
            }

            if (item.filterName === 'Rating') {
              const { filterName, options } = item;
              return (
                <li key={filterName}>
                  <h5>{filterName}:</h5>

                  {options.map((option) => {
                    return (
                      <button
                        key={option}
                        onClick={() => dispatch(removeRatingFilter(option))}
                      >
                        <span>
                          {option} {option > 1 ? 'stars' : 'star'}
                        </span>
                        <IoClose className={styles.icon} />
                      </button>
                    );
                  })}
                </li>
              );
            }

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
