import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';
import { openAddReviewModal } from '@/redux/reducers/reviewsSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Header = ({ reviewsCount }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const dispachAction = () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }
    dispatch(openAddReviewModal());
  };

  return (
    <div className={styles.header}>
      <h2>
        Reviews <span> ({reviewsCount})</span>
      </h2>

      <button onClick={dispachAction}>
        <span>Add review</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
