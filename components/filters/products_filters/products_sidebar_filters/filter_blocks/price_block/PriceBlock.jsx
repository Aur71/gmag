import styles from './PriceBlock.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPrice } from '@/redux/reducers/productsSlice';
import BlockHeader from '../block_components/block_header/BlockHeader';
import ReactSlider from 'react-slider';

const PriceBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const [min, setMin] = useState(options.min);
  const [max, setMax] = useState(options.max);

  function handleSliderChange(values) {
    setMin(parseInt(values[0]));
    setMax(parseInt(values[1]));
    dispatch(setPrice({ min: parseInt(values[0]), max: parseInt(values[1]) }));
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
