import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { useDeleteQuestion } from '@/hooks/product_question/useDeleteQuestion';
import EditQuestion from './edit_question/EditQuestion';
import styles from './Header.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';

const Header = ({ question }) => {
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const { postedBy, createdAt } = question;
  const date = formatDate(createdAt);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { deleteQuestion, loading } = useDeleteQuestion();

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
              <button
                onClick={() => deleteQuestion(question)}
                disabled={loading}
              >
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
