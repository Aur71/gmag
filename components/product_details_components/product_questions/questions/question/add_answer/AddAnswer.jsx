import { useState } from 'react';
import { useAddAnswer } from '@/hooks/product_question/useAddAnswer';
import styles from './AddAnswer.module.scss';

const AddAnswer = ({ showAddAnswer, setShowAddAnswer, questionId }) => {
  const [answer, setAnswer] = useState('');
  const { addAnswer, loading } = useAddAnswer();

  const handleAnswer = (e) => {
    const value = e.target.value;
    if (value.length <= 500) setAnswer(value);
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
        <button
          onClick={() =>
            addAnswer(answer, questionId, setShowAddAnswer, setAnswer)
          }
          disabled={loading}
        >
          Add answer
        </button>
        <button onClick={() => setShowAddAnswer(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddAnswer;
