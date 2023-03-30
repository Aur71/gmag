import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './PriceBlock.module.scss';
import {
  addPriceFilter,
  removePriceFilter,
} from '@/redux/reducers/filtersSidebarSlice';

const PriceBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state) => state.filtersSidebar);
  const [min, setMin] = useState(options.min);
  const [max, setMax] = useState(options.max);
  const firstSliderRef = useRef(null);
  const secondSliderRef = useRef(null);
  const trackRef = useRef(null);
  const minGap = 1;

  const checkMin = (num) => {
    if (num <= options.min) return options.min;
    if (num >= max - minGap) return max - minGap;
    return num;
  };

  const checkMax = (num) => {
    if (num >= options.max) return options.max;
    if (num <= min + minGap) return min + minGap;
    return num;
  };

  const handleMin = (e) => {
    const minPrice = checkMin(parseInt(e.target.value));
    setMin(minPrice);
  };
  const handleMax = (e) => {
    const maxPrice = checkMax(parseInt(e.target.value));
    setMax(maxPrice);
  };

  // THE TRACK SHOUD BE RESETED WHEN THE CLEAR BUTTONS IS PRESSED
  const applyPrice = () => {
    if (min !== options.min || max !== options.max) {
      dispatch(addPriceFilter({ min, max }));
      return;
    }
    dispatch(removePriceFilter());
  };

  useEffect(() => {
    const hasPriceFilter = activeFilters.some(
      (item) => item.filterName === 'Price'
    );
    if (!hasPriceFilter) {
      setMin(options.min);
      setMax(options.max);
    }
  }, [options, activeFilters]);

  useEffect(() => {
    const backgroundColor = 'rgb(121, 121, 121)';
    const accentColor = '#ff9900';
    const percent1 = ((min - options.min) / (options.max - options.min)) * 100;
    const percent2 = ((max - options.min) / (options.max - options.min)) * 100;
    const gradient = `linear-gradient(to right, ${accentColor},${accentColor} ${percent1}%, ${backgroundColor} ${percent1}%,${backgroundColor} ${percent2}%, ${accentColor} ${percent2}%)`;
    trackRef.current.style.background = gradient;
  }, [min, max, options, activeFilters]);

  return (
    <div className={styles.price_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        <div className={styles.slider}>
          <div className={styles.track} ref={trackRef}></div>

          <input
            type='range'
            min={options.min}
            max={options.max}
            step={1}
            value={min}
            onChange={handleMin}
            ref={firstSliderRef}
          />
          <input
            type='range'
            min={options.min}
            max={options.max}
            step={1}
            value={max}
            onChange={handleMax}
            ref={secondSliderRef}
          />
        </div>

        <div className={styles.range_container}>
          <p>{min}</p>
          <span>-</span>
          <p>{max}</p>
        </div>

        <button
          onClick={applyPrice}
          className={`${
            (min !== options.min || max !== options.max) && styles.active
          }`}
        >
          apply
        </button>
      </div>
    </div>
  );
};

export default PriceBlock;
