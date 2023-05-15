import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import EditAnswer from './edit_answer/EditAnswer';
import axios from 'axios';
import styles from './Answer.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Answer = ({ answer, questionId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const { name } = answer.postedBy;
  const date = formatDate(answer.createdAt);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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

  const deleteComment = async () => {
    if (!user || answer.postedBy._id !== user?._id) return;

    const url = `https://gmag-backend.onrender.com/api/v1/questions/${router.query.id}/${questionId}/answers/${answer._id}`;
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
              <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
              <button disabled={loading} onClick={deleteComment}>
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {showEdit ? (
        <EditAnswer
          questionId={questionId}
          answer={answer}
          setShowEdit={setShowEdit}
        />
      ) : null}

      {!showEdit ? <h5>{answer.answer}</h5> : null}
    </div>
  );
};

export default Answer;
