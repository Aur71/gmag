import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './AddQuestion.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const AddQuestion = ({ showAddQuestion, setShowAddQuestion }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestion = (e) => {
    const value = e.target.value;
    if (value.length > 500) return;
    setQuestion(value);
  };

  const addQuestion = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }
    if (!question.length) {
      const notification = {
        type: 'error',
        message: 'You forgot to add a question.',
      };
      dispatch(addNotification(notification));
      return;
    }
    const url = `http://localhost:3000/api/v1/questions/${router.query.id}`;
    const data = { question };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .post(url, data, { headers })
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
        setShowAddQuestion(false);
        setQuestion('');
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
    <div
      className={`${styles.add_question} ${showAddQuestion && styles.active}`}
    >
      <div className={styles.textarea_container}>
        <textarea
          name='add question'
          value={question}
          onChange={handleQuestion}
          placeholder='Your question...'
        />
        <span>{question.length} / 500</span>
      </div>

      <div className={styles.btns_container}>
        <button onClick={addQuestion} disabled={loading}>
          Add question
        </button>
        <button onClick={() => setShowAddQuestion(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddQuestion;
