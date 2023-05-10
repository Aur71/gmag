import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './ActiveFiltersBlock.module.scss';

const ActiveFiltersBlock = () => {
  return (
    <div className={styles.active_filters_block}>
      <BlockHeader />
      ActiveFiltersBlock
    </div>
  );
};

export default ActiveFiltersBlock;
