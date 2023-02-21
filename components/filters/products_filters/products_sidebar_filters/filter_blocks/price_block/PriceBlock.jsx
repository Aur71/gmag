import styles from './PriceBlock.module.scss';
import { useState } from 'react';
import BlockHeader from '../block_components/block_header/BlockHeader';
import ReactSlider from 'react-slider';

const PriceBlock = ({ name, options }) => {
  const [min, setMin] = useState(options.min);
  const [max, setMax] = useState(options.max);

  function handleSliderChange(values) {
    setMin(parseInt(values[0]));
    setMax(parseInt(values[1]));
  }

  function handleMinChange(event) {
    setMin(parseInt(event.target.value));
  }

  function handleMaxChange(event) {
    setMax(parseInt(event.target.value));
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
          minDistance={50}
          step={50}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className={styles.thumb}></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className={styles.track}></div>;
          }}
          onChange={handleSliderChange}
        />

        <div className={styles.inputs_container}>
          <input
            type='number'
            min={options.min}
            max={options.max}
            value={min}
            onChange={handleMinChange}
          />

          <span>-</span>

          <input
            type='number'
            min={options.min}
            max={options.max}
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
