import { useDispatch } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './RatingBlock.module.scss';
import { BsStarFill } from 'react-icons/bs';
import {
  addRatingFilter,
  removeRatingFilter,
} from '@/redux/reducers/productFilteringSidebarSlice';

const RatingBlock = ({ filter }) => {
  const dispatch = useDispatch();
  const { filterName, options } = filter;

  const handleCheckbox = (e, option) => {
    if (e.target.checked) dispatch(addRatingFilter({ filterName, option }));
    if (!e.target.checked) dispatch(removeRatingFilter({ filterName, option }));
  };

  return (
    <div className={styles.rating_block}>
      <BlockHeader name='Rating' dependencies={[]} />

      <div className={styles.options}>
        {options.map((option) => {
          const { id, value, count } = option;
          const checkboxId = `${id} - checkbox`;

          return (
            <div key={id}>
              <input
                type='checkbox'
                id={checkboxId}
                onChange={(e) => handleCheckbox(e, option)}
              />
              <BsStarFill
                className={`${styles.icon} ${value >= 1 && styles.active}`}
              />
              <BsStarFill
                className={`${styles.icon} ${value >= 2 && styles.active}`}
              />
              <BsStarFill
                className={`${styles.icon} ${value >= 3 && styles.active}`}
              />
              <BsStarFill
                className={`${styles.icon} ${value >= 4 && styles.active}`}
              />
              <BsStarFill
                className={`${styles.icon} ${value >= 5 && styles.active}`}
              />
              <span>({count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBlock;
