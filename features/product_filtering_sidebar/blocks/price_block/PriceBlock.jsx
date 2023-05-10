import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './PriceBlock.module.scss';

const PriceBlock = () => {
  return (
    <div className={styles.price_block}>
      <BlockHeader />
      PriceBlock
    </div>
  );
};

export default PriceBlock;
