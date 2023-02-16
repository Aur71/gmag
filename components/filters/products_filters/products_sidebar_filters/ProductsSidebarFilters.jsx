import styles from './ProductsSidebarFilters.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CloseFiltersBlock from './filter_blocks/close_filters_block/CloseFiltersBlock';
import ActiveFiltersBlock from './filter_blocks/active_filters_block/ActiveFiltersBlock';
import PriceBlock from './filter_blocks/price_block/PriceBlock';
import RatingBlock from './filter_blocks/rating_block/RatingBlock';
import FilterBlock from './filter_blocks/filter_block/FilterBlock';
import { findCommonProperties } from '@/utils/findCommonProperties';

const ProductsSidebarFilters = ({ data }) => {
  const showFilters = useSelector((state) => state.layout.showFilters);

  const [commonProps, setCommonProps] = useState([]);

  useEffect(() => {
    setCommonProps(findCommonProperties(data));
  }, [data]);

  const handleFilter = (e) => {
    console.log(e.target);
  };

  return (
    <div
      className={`${styles.products_sidebar_filters} ${
        showFilters && styles.active
      }`}
    >
      <CloseFiltersBlock />
      <ActiveFiltersBlock />

      {commonProps.map((filter, index) => {
        const { name, options } = filter;

        if (name === 'price') {
          return (
            <PriceBlock
              key={index}
              name={name}
              options={options}
              handleFilter={handleFilter}
            />
          );
        }

        if (name === 'rating') {
          return (
            <RatingBlock
              key={index}
              name={name}
              options={options}
              handleFilter={handleFilter}
            />
          );
        }

        return (
          <FilterBlock
            key={index}
            name={name}
            options={options}
            handleFilter={handleFilter}
          />
        );
      })}
    </div>
  );
};

export default ProductsSidebarFilters;
