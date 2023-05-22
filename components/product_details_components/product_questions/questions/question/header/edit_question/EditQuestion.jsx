import { useState, useEffect } from 'react';
import { useEditQuestion } from '@/hooks/product_question/useEditQuestion';
import styles from './EditQuestion.module.scss';

const EditQuestion = ({ question, setShowEdit }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const { editQuestion, loading } = useEditQuestion();

  const handleNewQuestion = (e) => {
    if (e.target.value.length <= 500) setNewQuestion(e.target.value);
  };

  useEffect(() => {
    setNewQuestion(question.question);
  }, [question]);

  return (
    <div className={styles.edit_question}>
      <textarea
        value={newQuestion}
        onChange={handleNewQuestion}
        placeholder='Your question...'
      />

      <div className={styles.btns_container}>
        <button
          onClick={() => editQuestion(question, newQuestion, setShowEdit)}
          disabled={loading}
        >
          Save
        </button>
        <button onClick={() => setShowEdit(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditQuestion;
