import styles from './ProductsFilterBlock.module.scss';
import { useState, useRef, useEffect } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const ProductsFilterBlock = ({ filter }) => {
  const [showFilters, setShowFilters] = useState(true);
  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const headerHeight = headerRef.current.getBoundingClientRect().height;
    const filtersHeight = filtersRef.current.getBoundingClientRect().height;
    const filterBlockRef = filtersRef.current.parentElement;

    filterBlockRef.style.height = showFilters
      ? `${headerHeight + filtersHeight}px`
      : `${headerHeight}px`;
  }, [showFilters]);

  // NEED TO CHECK THE TYPE OF NAME
  // ADD SCROLL IF THERE ARE TOO MANY FILTERS
  // IF THE NAME IS RATING ADD STARS
  // REMOVE THE SEARCH BAR AT PRICE AND ADD A PRICE RANGE

  return (
    <div className={styles.filter_block}>
      <div className={styles.header} ref={headerRef}>
        <h3>{filter.name}</h3>

        <button
          className={`${!showFilters && styles.down}`}
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          <RxCaretUp />
        </button>
      </div>

      <div className={styles.filters} ref={filtersRef}>
        {filter.options.map((option) => {
          return (
            <label key={option.name}>
              <input type='checkbox' />
              {option.name} <span>({option.count})</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsFilterBlock;
