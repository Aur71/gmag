import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './EditQuestion.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const EditQuestion = ({ question, setShowEdit }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [newQuestion, setNewQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleNewQuestion = (e) => {
    if (e.target.value.length <= 500) setNewQuestion(e.target.value);
  };

  useEffect(() => {
    setNewQuestion(question.question);
  }, [question]);

  const updateQuestion = async () => {
    if (!user || user._id !== question.postedBy._id) {
      const notification = {
        type: 'error',
        message: 'You are not authorized',
      };
      dispatch(addNotification(notification));
      return;
    }

    const url = `http://localhost:3000/api/v1/questions/${router.query.id}/${question._id}`;
    const data = { newQuestion };
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
    <div className={styles.edit_question}>
      <textarea
        value={newQuestion}
        onChange={handleNewQuestion}
        placeholder='Your question...'
      />

      <div className={styles.btns_container}>
        <button onClick={updateQuestion} disabled={loading}>
          Save
        </button>
        <button onClick={() => setShowEdit(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditQuestion;
