import styles from './ProductsSidebarFilters.module.scss';
// import { useState, useEffect } from 'react';
import PriceBlock from './filter_blocks/price_block/PriceBlock';
import RatingBlock from './filter_blocks/rating_block/RatingBlock';
import FilterBlock from './filter_blocks/filter_block/FilterBlock';
// import { findCommonProperties } from '@/utils/findCommonProperties';
import { AiOutlineClose } from 'react-icons/ai';

const ProductsSidebarFilters = () => {
  // const [commonProps, setCommonProps] = useState([]);

  // useEffect(() => {
  //   setCommonProps(findCommonProperties([]));
  // }, [data]);

  return (
    <div className={styles.products_sidebar_filters}>
      <button>
        Remove all filters
        <AiOutlineClose className={styles.icon} />
      </button>
      {/* 
      {commonProps.map((filter, index) => {
        const { name, options } = filter;

        if (name === 'price') {
          return <PriceBlock key={index} name={name} options={options} />;
        }

        if (name === 'rating') {
          return <RatingBlock key={index} name={name} options={options} />;
        }

        return <FilterBlock key={index} name={name} options={options} />;
      })} */}
    </div>
  );
};

export default ProductsSidebarFilters;
