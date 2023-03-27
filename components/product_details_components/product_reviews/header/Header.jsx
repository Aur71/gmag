import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';
import { handleShowAddReview } from '@/redux/reducers/singleProductSlice';

const Header = ({ reviewsCount }) => {
  const dispatch = useDispatch();

  const dispachAction = () => {
    dispatch(handleShowAddReview(true));
  };

  return (
    <div className={styles.header}>
      <h2>
        Reviews{' '}
        <span>
          {' '}
          ({reviewsCount} {reviewsCount === 1 ? 'review' : 'reviews'})
        </span>
      </h2>

      <button onClick={dispachAction}>
        <span>Add review</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
