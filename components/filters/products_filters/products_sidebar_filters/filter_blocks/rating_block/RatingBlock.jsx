import { useDispatch, useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import styles from './RatingBlock.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { handleRating } from '@/redux/reducers/filtersSidebarSlice';

const RatingBlock = ({ name, options }) => {
  const dispatch = useDispatch();
  const { rating } = useSelector((state) => state.filtersSidebar);

  const handleCheckBox = (e) => {
    const value = Number(e.target.value);
    if (e.target.checked) return dispatch(handleRating(value));
    dispatch(handleRating(null));
  };

  return (
    <div className={styles.rating_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        {options.map((item) => {
          const { count, id, value } = item;

          return (
            <div className={styles.option} key={id}>
              <input
                type='checkbox'
                checked={rating === value}
                value={value}
                onChange={handleCheckBox}
              />
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
