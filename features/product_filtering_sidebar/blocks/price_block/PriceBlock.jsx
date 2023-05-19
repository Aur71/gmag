import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import DoubleSlider from './double_slider/DoubleSlider';
import ActiveRange from './active_range/ActiveRange';
import ApplyBtn from './apply_btn/ApplyBtn';
import styles from './PriceBlock.module.scss';

const PriceBlock = ({ filter }) => {
  const router = useRouter();
  const [min, setMin] = useState(filter.options.min);
  const [max, setMax] = useState(filter.options.max);
  const { isPriceFilterActive } = useSelector(
    (state) => state.productFilteringSidebar
  );

  useEffect(() => {
    if (!isPriceFilterActive) {
      setMin(filter.options.min);
      setMax(filter.options.max);
    }
  }, [isPriceFilterActive, router.asPath]);

  return (
    <div className={styles.price_block}>
      <BlockHeader name='Price' dependencies={[]} />

      <div className={styles.options}>
        <DoubleSlider
          filter={filter}
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
        />
        <ActiveRange min={min} max={max} />
        <ApplyBtn filter={filter} min={min} max={max} />
      </div>
    </div>
  );
};

export default PriceBlock;
