import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './Answer.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Answer = ({ answer }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const { name } = answer.postedBy;
  const date = formatDate(answer.createdAt);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target))
      setShowDropdown(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  const deleteComment = () => {
    if (!user || answer.postedBy._id !== user?._id) return;
  };

  return (
    <div className={styles.answer}>
      <div className={styles.wrapper}>
        <h6>
          By {name} on {date}
        </h6>

        {answer.postedBy._id === user?._id ? (
          <div
            className={styles.dropdown_btn}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FiMoreVertical />

            <div
              className={`${styles.dropdown} ${showDropdown && styles.active}`}
              ref={dropdownRef}
            >
              <button>Edit</button>
              <button disabled={loading} onClick={deleteComment}>
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <h5>{answer.answer}</h5>
    </div>
  );
};

export default Answer;
