import styles from './ProductsGeneralFilters.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sort, display } from '@/data/products-general-filters-options';
import { handleFilters } from '@/redux/reducers/layoutSlice';
import { CgArrowsVAlt } from 'react-icons/cg';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { FiSliders } from 'react-icons/fi';

const ProductsGeneralFilters = () => {
  const dispatch = useDispatch();
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showDisplayDropdown, setShowDisplayDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDisplayDropdown(false);
    setShowSortDropdown(!showSortDropdown);
  };

  const handleDisplayDropdown = () => {
    setShowSortDropdown(false);
    setShowDisplayDropdown(!showDisplayDropdown);
  };

  return (
    <div className={styles.products_general_filters}>
      {/* SORT BTN */}
      <button
        className={`${showSortDropdown && styles.active}`}
        onClick={handleShowDropdown}
      >
        <CgArrowsVAlt className={styles.icon} />
        <span>Sort</span>
        <div
          className={`${styles.dropdown} ${showSortDropdown && styles.active}`}
        >
          {sort.map((item) => {
            // WHEN A BUTTON IS CLIKED AN ACTION WILL BE DISPACHED
            return <button key={item.id}>{item.name}</button>;
          })}
        </div>
      </button>

      {/* DISPLAY BTN */}
      <button
        className={`${showDisplayDropdown && styles.active}`}
        onClick={handleDisplayDropdown}
      >
        <BsFillGrid1X2Fill className={styles.icon} />
        <span>Display</span>
        <div
          className={`${styles.dropdown} ${
            showDisplayDropdown && styles.active
          }`}
        >
          {' '}
          {display.map((item) => {
            // WHEN A BUTTON IS CLIKED AN ACTION WILL BE DISPACHED
            return <button key={item.id}>{item.name}</button>;
          })}
        </div>
      </button>

      {/* FILTERS BTN */}
      <button onClick={() => dispatch(handleFilters())}>
        <FiSliders className={styles.icon} />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default ProductsGeneralFilters;
