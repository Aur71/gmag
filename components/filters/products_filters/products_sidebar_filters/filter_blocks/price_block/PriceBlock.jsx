import styles from './PriceBlock.module.scss';
import BlockHeader from '../block_components/block_header/BlockHeader';

const PriceBlock = ({ name, options }) => {
  return (
    <div className={styles.price_block}>
      <BlockHeader name={name} />

      <div className={styles.options}></div>
    </div>
  );
};

export default PriceBlock;
