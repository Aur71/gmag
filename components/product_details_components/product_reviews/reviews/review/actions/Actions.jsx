import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Like from './like/Like';
import styles from './Actions.module.scss';
import { BiLike, BiCommentAdd, BiCommentDetail } from 'react-icons/bi';
import { CgMoreVertical } from 'react-icons/cg';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {
  openEditReviewModal,
  openDeleteReviewModal,
} from '@/redux/reducers/reviewsSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Actions = ({
  numberOfComments,
  showAddComment,
  setShowAddComment,
  showComments,
  setShowComments,
  review,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  const handleLike = () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in',
      };
      dispatch(addNotification(notification));
      return;
    }
  };

  const handleAddComment = () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in',
      };
      dispatch(addNotification(notification));
      return;
    }
    setShowAddComment(!showAddComment);
  };

  return (
    <div className={styles.actions}>
      <div className={styles.btns_container}>
        <Like review={review} />

        <button onClick={handleAddComment}>
          <BiCommentAdd className={styles.icon} />
          <span>Add comment</span>
        </button>

        {numberOfComments ? (
          <button onClick={() => setShowComments(!showComments)}>
            <BiCommentDetail className={styles.icon} />
            <span>View comments</span>
            <span>({numberOfComments})</span>
          </button>
        ) : null}

        {user?._id === review?.postedBy?._id ? (
          <div
            className={styles.more_btn}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <CgMoreVertical />
            <div
              className={`${styles.dropdown} ${showDropdown && styles.active}`}
              ref={dropdownRef}
            >
              <button onClick={() => dispatch(openEditReviewModal(review))}>
                <AiFillEdit className={styles.icon} />
                Edit
              </button>
              <button onClick={() => dispatch(openDeleteReviewModal(review))}>
                <AiFillDelete className={styles.icon} />
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Actions;
