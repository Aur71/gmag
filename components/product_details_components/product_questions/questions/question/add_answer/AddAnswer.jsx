import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './AddAnswer.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const AddAnswer = ({ showAddAnswer, setShowAddAnswer, questionId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnswer = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setAnswer(value);
    }
  };

  const addAnswer = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }
    if (!answer.length) {
      const notification = {
        type: 'error',
        message: 'You forgot to add an answer.',
      };
      dispatch(addNotification(notification));
      return;
    }
    const url = `https://gmag-backend.onrender.com/api/v1/questions/${router.query.id}/${questionId}/answers`;
    const data = { answer };
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
        setShowAddAnswer(false);
        setAnswer('');
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
    <div className={`${styles.add_answer} ${showAddAnswer && styles.active}`}>
      <div className={styles.textarea_container}>
        <textarea
          name='answer'
          value={answer}
          onChange={handleAnswer}
          placeholder='Write an answer'
        />
        <span>{answer.length} / 500</span>
      </div>

      <div className={styles.btn_container}>
        <button onClick={addAnswer} disabled={loading}>
          Add answer
        </button>
        <button onClick={() => setShowAddAnswer(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddAnswer;
