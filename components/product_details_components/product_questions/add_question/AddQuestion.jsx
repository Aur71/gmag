import { useState } from 'react';
import { useAddQuestion } from '@/hooks/product_question/useAddQuestion';
import styles from './AddQuestion.module.scss';

const AddQuestion = ({ showAddQuestion, setShowAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const { addQuestion, loading } = useAddQuestion();

  const handleQuestion = (e) => {
    const value = e.target.value;
    if (value.length > 500) return;
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
        <span>{question.length} / 500</span>
      </div>

      <div className={styles.btns_container}>
        <button
          onClick={() => addQuestion(question, setShowAddQuestion, setQuestion)}
          disabled={loading}
        >
          Add question
        </button>
        <button onClick={() => setShowAddQuestion(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddQuestion;
