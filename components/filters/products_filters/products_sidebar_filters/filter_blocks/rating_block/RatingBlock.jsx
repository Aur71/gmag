import styles from './RatingBlock.module.scss';
import BlockHeader from '../block_components/block_header/BlockHeader';

const RatingBlock = ({ name, options }) => {
  return (
    <div className={styles.rating_block}>
      <BlockHeader name={name} />

      <div className={styles.options}></div>
    </div>
  );
};

export default RatingBlock;
