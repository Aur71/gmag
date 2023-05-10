import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './SpecificationBlock.module.scss';

const SpecificationBlock = () => {
  return (
    <div className={styles.specification_block}>
      <BlockHeader />
      SpecificationBlock
    </div>
  );
};

export default SpecificationBlock;
