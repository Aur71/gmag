import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditComment from './edit_comment/EditComment';
import Image from 'next/image';
import styles from './Comment.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';

const Comment = ({ comment, review }) => {
  const { user } = useSelector((state) => state.user);
  const { content, createdAt, postedBy } = comment;
  const date = formatDate(createdAt);
  const dropdownRef = useRef(null);
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
                <button>Delete</button>
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
