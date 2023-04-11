import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import styles from './ActiveFilters.module.scss';
import { IoClose } from 'react-icons/io5';
import {
  removeFilter,
  clearFilters,
  removePriceFilter,
  removeRatingFilter,
  removeInitialFilterByName,
} from '@/redux/reducers/filtersSidebarSlice';

const ActiveFilters = () => {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state) => state.filtersSidebar);

  return (
    <div className={styles.active_filters}>
      <Header name='Active filters' dependencies={activeFilters} />

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
                  <button
                    onClick={() => {
                      dispatch(removePriceFilter());
                      dispatch(removeInitialFilterByName(filterName));
                    }}
                  >
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
                        onClick={() => {
                          dispatch(removeRatingFilter(option));
                          dispatch(removeInitialFilterByName(filterName));
                        }}
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
                      onClick={() => {
                        dispatch(removeFilter(obj));
                        dispatch(removeInitialFilterByName(filterName));
                      }}
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

export default ActiveFilters;
