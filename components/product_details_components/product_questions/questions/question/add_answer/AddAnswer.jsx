import { useState } from 'react';
import styles from './AddAnswer.module.scss';

const AddAnswer = ({ showAddAnswer, setShowAddAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswer = (e) => {
    const value = e.target.value;
    if (value.length <= 5000) {
      setAnswer(value);
    }
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
        <span>{answer.length} / 5000</span>
      </div>

      <div className={styles.btn_container}>
        <button>Add answer</button>
        <button onClick={() => setShowAddAnswer(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddAnswer;
