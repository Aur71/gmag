import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './PriceBlock.module.scss';
import {
  addPriceFilter,
  removePriceFilter,
} from '@/redux/reducers/filtersSidebarSlice';

const PriceBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const { priceRange, activePriceRange } = useSelector(
    (state) => state.filtersSidebar
  );
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  // function handleSliderChange(values) {
  //   const minValue = parseInt(values[0]);
  //   const maxValue = parseInt(values[1]);
  //   setMin(minValue);
  //   setMax(maxValue);
  //   dispatch(addPriceFilter({ min: minValue, max: maxValue }));
  // }

  // useEffect(() => {
  //   setMin(options.min);
  //   setMax(options.max);
  // }, [options]);

  // useEffect(() => {
  //   if (min !== options.min && max !== options.max)
  //     dispatch(addPriceFilter({ min, max }));
  //   dispatch(removePriceFilter());
  // }, [min, max, options]);

  return (
    <div className={styles.price_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        <div className={styles.slider}></div>

        <div className={styles.range_container}>
          <p>{min}</p>
          <span>-</span>
          <p>{max}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
