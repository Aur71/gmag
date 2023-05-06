import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './EditAnswer.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const EditAnswer = ({ questionId, answer, setShowEdit }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    setNewAnswer(answer.answer);
  }, [answer]);

  const handleNewAnswer = (e) => {
    if (e.target.value.length <= 500) setNewAnswer(e.target.value);
  };

  const updateAnswer = async () => {
    if (!user || user?._id !== answer.postedBy._id) return;
    if (!newAnswer) {
      const notification = {
        type: 'error',
        message: 'You forgot to add an answer.',
      };
      dispatch(addNotification(notification));
      return;
    }

    const url = `http://localhost:3000/api/v1/questions/${router.query.id}/${questionId}/answers/${answer._id}`;
    const data = { newAnswer };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .put(url, data, { headers })
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
        setShowEdit(false);
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
    <div className={styles.edit_answer}>
      <textarea
        value={newAnswer}
        onChange={handleNewAnswer}
        placeholder='Your answer...'
      />

      <div className={styles.btns_container}>
        <button disabled={loading} onClick={updateAnswer}>
          Save
        </button>
        <button onClick={() => setShowEdit(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditAnswer;
