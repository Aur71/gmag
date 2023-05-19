import { useRef, useEffect } from 'react';
import styles from './DoubleSlider.module.scss';

const DoubleSlider = ({ filter, min, setMin, max, setMax }) => {
  const trackRef = useRef(null);
  const firstSliderRef = useRef(null);
  const secondSliderRef = useRef(null);
  const minGap = 1;

  const checkMin = (num) => {
    if (num <= filter.options.min) return filter.options.min;
    if (num >= max - minGap) return max - minGap;
    return num;
  };
  const checkMax = (num) => {
    if (num >= filter.options.max) return filter.options.max;
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

  useEffect(() => {
    const backgroundColor = 'rgb(121, 121, 121)';
    const accentColor = '#ff9900';
    const percent1 =
      ((min - filter.options.min) / (filter.options.max - filter.options.min)) *
      100;
    const percent2 =
      ((max - filter.options.min) / (filter.options.max - filter.options.min)) *
      100;
    const gradient = `linear-gradient(to right, ${accentColor},${accentColor} ${percent1}%, ${backgroundColor} ${percent1}%,${backgroundColor} ${percent2}%, ${accentColor} ${percent2}%)`;
    trackRef.current.style.background = gradient;
  }, [min, max, filter]);

  return (
    <div className={styles.double_slider}>
      <div className={styles.track} ref={trackRef}></div>

      <input
        type='range'
        min={filter.options.min}
        max={filter.options.max}
        step={1}
        ref={firstSliderRef}
        value={min}
        onChange={handleMin}
        id='min_range'
      />
      <input
        type='range'
        min={filter.options.min}
        max={filter.options.max}
        step={1}
        ref={secondSliderRef}
        value={max}
        onChange={handleMax}
        id='max_range'
      />
    </div>
  );
};

export default DoubleSlider;
