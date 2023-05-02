import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Actions.module.scss';
import { BiLike, BiCommentAdd, BiCommentDetail } from 'react-icons/bi';
import { CgMoreVertical } from 'react-icons/cg';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {
  openEditReviewModal,
  openDeleteReviewModal,
} from '@/redux/reducers/reviewsSlice';

const Actions = ({
  likes,
  numberOfComments,
  showAddComment,
  setShowAddComment,
  showComments,
  setShowComments,
  review,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.actions}>
      <div className={styles.btns_container}>
        <button>
          <BiLike className={styles.icon} />
          <span>({likes})</span>
        </button>

        <button onClick={() => setShowAddComment(!showAddComment)}>
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

        <div
          className={styles.more_btn}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <CgMoreVertical />
          <div
            className={`${styles.dropdown} ${showDropdown && styles.active}`}
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
      </div>
    </div>
  );
};

export default Actions;
