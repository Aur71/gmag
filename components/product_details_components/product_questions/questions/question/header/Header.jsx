import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import EditQuestion from './edit_question/EditQuestion';
import axios from 'axios';
import styles from './Header.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Header = ({ question }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const { postedBy, createdAt } = question;
  const date = formatDate(createdAt);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
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

  const deleteQuestion = async () => {
    if (!user) return;
    if (user._id !== question.postedBy._id) return;

    const url = `https://gmag-backend.onrender.com/api/v1/questions/${router.query.id}/${question._id}`;
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
    <div className={styles.header}>
      <div>
        <h4>
          By {postedBy.name} on {date}
        </h4>

        {user?._id === question.postedBy._id ? (
          <div
            className={styles.dropdown_btn}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FiMoreVertical className={styles.icon} />

            <div
              className={`${styles.dropdown} ${showDropdown && styles.active}`}
              ref={dropdownRef}
            >
              <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
              <button onClick={deleteQuestion} disabled={loading}>
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {showEdit ? (
        <EditQuestion question={question} setShowEdit={setShowEdit} />
      ) : null}
      {!showEdit ? <h3>{question.question}</h3> : null}
    </div>
  );
};

export default Header;
