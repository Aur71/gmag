import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import EditComment from './edit_comment/EditComment';
import Image from 'next/image';
import axios from 'axios';
import styles from './Comment.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Comment = ({ comment, review }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const { content, createdAt, postedBy } = comment;
  const date = formatDate(createdAt);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditComment, setShowEditComment] = useState(false);

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

  const deleteComment = async () => {
    if (!user) return;
    if (user._id !== comment.postedBy._id) return;

    const url = `https://gmag-backend.onrender.com/api/v1/reviews/${router.query.id}/${review._id}/comments/${comment._id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .delete(url, { headers })
      .then((response) => {
        if (response.data.error) {
          const notification = {
            type: 'error',
            message: response.data.error,
          };
          dispatch(addNotification(notification));
          return;
        }
        router.push(router.asPath);
        const notification = {
          type: 'success',
          message: response.data,
        };
        dispatch(addNotification(notification));
        setLoading(false);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: error.message,
        };
        dispatch(addNotification(notification));
        setLoading(false);
      });
  };

  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <Image
          src={postedBy.profileImage}
          alt='user image'
          width={50}
          height={50}
        />

        <div className={styles.author_info}>
          <div>
            <h5>{postedBy.name}</h5>
            <p>{date}</p>
          </div>

          {user?._id === comment?.postedBy?._id ? (
            <div
              className={styles.dropdown_btn}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FiMoreVertical />
              <div
                className={`${styles.dropdown} ${
                  showDropdown && styles.active
                }`}
                ref={dropdownRef}
              >
                <button onClick={() => setShowEditComment(!showEditComment)}>
                  Edit
                </button>
                <button disabled={loading} onClick={deleteComment}>
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {showEditComment ? (
        <EditComment
          setShowEditComment={setShowEditComment}
          comment={comment}
          review={review}
        />
      ) : null}

      {!showEditComment ? <p>{content}</p> : null}
    </div>
  );
};

export default Comment;
