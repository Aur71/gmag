import styles from './RatingBlock.module.scss';
import BlockHeader from '../block_components/block_header/BlockHeader';
import { BsStarFill } from 'react-icons/bs';

const RatingBlock = ({ name, options }) => {
  const handleCheckBox = (e) => {
    const value = Number(e.target.value);
    console.log(value);
    if (e.target.checked) {
      // if is true dispath an action that filters based on rating(value)
    } else {
      // dispath an action that removes the filter
    }
  };

  return (
    <div className={styles.rating_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        {options.map((item) => {
          const { count, id, value } = item;

          return (
            <div className={styles.option} key={id}>
              <input type='checkbox' value={value} onChange={handleCheckBox} />
              <div className={styles.stars_container}>
                <BsStarFill className={`${value >= 1 && styles.active_star}`} />
                <BsStarFill className={`${value >= 2 && styles.active_star}`} />
                <BsStarFill className={`${value >= 3 && styles.active_star}`} />
                <BsStarFill className={`${value >= 4 && styles.active_star}`} />
                <BsStarFill className={`${value >= 5 && styles.active_star}`} />
                <span>({count})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBlock;
