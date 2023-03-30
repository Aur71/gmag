import { useState } from 'react';
import styles from './AddQuestion.module.scss';

const AddQuestion = ({ showAddQuestion, setShowAddQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleQuestion = (e) => {
    const value = e.target.value;
    if (value.length > 5000) return;
    setQuestion(value);
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
        <span>{question.length} / 5000</span>
      </div>

      <div className={styles.btns_container}>
        <button>Add question</button>
        <button onClick={() => setShowAddQuestion(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddQuestion;
