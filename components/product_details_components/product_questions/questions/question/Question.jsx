import { useState } from 'react';
import Header from './header/Header';
import Actions from './actions/Actions';
import AddAnswer from './add_answer/AddAnswer';
import ReadAnswers from './read_answers/ReadAnswers';
import styles from './Question.module.scss';

const Question = ({ question }) => {
  const [showAddAnswer, setShowAddAnswer] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  // add a way to delete your question

  return (
    <div className={styles.question}>
      <Header question={question} />
      <Actions
        numOfAnswers={question.answers.length}
        showAddAnswer={showAddAnswer}
        setShowAddAnswer={setShowAddAnswer}
        showAnswers={showAnswers}
        setShowAnswers={setShowAnswers}
      />
      <AddAnswer
        showAddAnswer={showAddAnswer}
        setShowAddAnswer={setShowAddAnswer}
        questionId={question._id}
      />
      <ReadAnswers
        answers={question.answers}
        showAnswers={showAnswers}
        questionId={question._id}
      />
    </div>
  );
};

export default Question;
