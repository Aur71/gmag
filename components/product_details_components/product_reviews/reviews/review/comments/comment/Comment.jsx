import { useState, useRef, useEffect } from 'react';
import EditComment from './edit_comment/EditComment';
import DeleteComment from './delete_comment/DeleteComment';
import Image from 'next/image';
import styles from './Comment.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';

const Comment = ({ comment }) => {
  const { content, createdAt, postedBy } = comment;
  const date = formatDate(createdAt);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditComment, setShowEditComment] = useState(false);
  const [showDeleteComment, setShowDeleteComment] = useState(false);

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

  const handleShowEditComment = () => {
    setShowEditComment(!showEditComment);
    setShowDeleteComment(false);
  };

  const handleShowDeleteComment = () => {
    setShowDeleteComment(!showDeleteComment);
    setShowEditComment(false);
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

          <div
            className={styles.dropdown_btn}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FiMoreVertical />
            <div
              className={`${styles.dropdown} ${showDropdown && styles.active}`}
              ref={dropdownRef}
            >
              <button onClick={handleShowEditComment}>Edit</button>
              <button onClick={handleShowDeleteComment}>Delete</button>
            </div>
          </div>
        </div>
      </div>

      {showEditComment ? (
        <EditComment
          showEditComment={showEditComment}
          setShowEditComment={setShowEditComment}
          comment={comment}
        />
      ) : null}

      {showDeleteComment ? (
        <DeleteComment
          showDeleteComment={showDeleteComment}
          setShowDeleteComment={setShowDeleteComment}
          comment={comment}
        />
      ) : null}

      {!showEditComment && !showDeleteComment ? <p>{content}</p> : null}
    </div>
  );
};

export default Comment;
