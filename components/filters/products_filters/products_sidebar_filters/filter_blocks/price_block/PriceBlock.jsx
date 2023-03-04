import ReactSlider from 'react-slider';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './PriceBlock.module.scss';
import { handlePrice } from '@/redux/reducers/filtersSidebarSlice';

const PriceBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const [min, setMin] = useState(options.min);
  const [max, setMax] = useState(options.max);

  function handleSliderChange(values) {
    const minValue = parseInt(values[0]);
    const maxValue = parseInt(values[1]);
    setMin(minValue);
    setMax(maxValue);
    dispatch(handlePrice({ min: minValue, max: maxValue }));
  }

  return (
    <div className={styles.price_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        <ReactSlider
          defaultValue={[min, max]}
          className={styles.slider}
          trackClassName={styles.tracker}
          min={options.min}
          max={options.max}
          minDistance={5}
          step={5}
          pearling={false}
          renderThumb={(props) => {
            return <div {...props} className={styles.thumb}></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className={styles.track}></div>;
          }}
          onChange={handleSliderChange}
        />

        <div className={styles.inputs_container}>
          <p>{min}</p>
          <span>-</span>
          <p>{max}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
