import { useState, useRef, useEffect } from 'react';
import { useDeleteAnswer } from '@/hooks/product_question/useDeleteAnswer';
import { useSelector } from 'react-redux';
import EditAnswer from './edit_answer/EditAnswer';
import styles from './Answer.module.scss';
import formatDate from '@/utils/formatDate';
import { FiMoreVertical } from 'react-icons/fi';

const Answer = ({ answer, questionId }) => {
  const dropdownRef = useRef(null);
  const { name } = answer.postedBy;
  const date = formatDate(answer.createdAt);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [showEdit, setShowEdit] = useState(false);
  const { deleteAnswer, loading } = useDeleteAnswer();

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
              <button
                disabled={loading}
                onClick={() => deleteAnswer(answer, questionId)}
              >
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
