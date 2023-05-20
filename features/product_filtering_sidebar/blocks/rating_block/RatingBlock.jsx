import BlockHeader from '../block_components/block_header/BlockHeader';
import RatingOption from './rating_option/RatingOption';
import styles from './RatingBlock.module.scss';

const RatingBlock = ({ filter }) => {
  const { filterName, options } = filter;

  return (
    <div className={styles.rating_block}>
      <BlockHeader name='Rating' dependencies={filter} />

      <div className={styles.options}>
        {options.map((option) => {
          return (
            <RatingOption
              key={option.id}
              option={option}
              filterName={filterName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RatingBlock;
