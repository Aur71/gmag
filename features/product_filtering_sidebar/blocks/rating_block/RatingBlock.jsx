import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './RatingBlock.module.scss';

const RatingBlock = () => {
  return (
    <div className={styles.rating_block}>
      <BlockHeader name='Rating' dependencies={[]} />

      <div className={styles.options}></div>
    </div>
  );
};

export default RatingBlock;
