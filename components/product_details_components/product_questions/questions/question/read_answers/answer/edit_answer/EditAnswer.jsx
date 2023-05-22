import { useState, useEffect } from 'react';
import { useEditAnswer } from '@/hooks/product_question/useEditAnswer';
import styles from './EditAnswer.module.scss';

const EditAnswer = ({ questionId, answer, setShowEdit }) => {
  const [newAnswer, setNewAnswer] = useState('');
  const { editAnswer, loading } = useEditAnswer();

  useEffect(() => {
    setNewAnswer(answer.answer);
  }, [answer]);

  const handleNewAnswer = (e) => {
    if (e.target.value.length <= 500) setNewAnswer(e.target.value);
  };

  return (
    <div className={styles.edit_answer}>
      <textarea
        value={newAnswer}
        onChange={handleNewAnswer}
        placeholder='Your answer...'
      />

      <div className={styles.btns_container}>
        <button
          disabled={loading}
          onClick={() => editAnswer(answer, newAnswer, questionId, setShowEdit)}
        >
          Save
        </button>
        <button onClick={() => setShowEdit(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditAnswer;
