import { useState } from 'react';
import Header from './header/Header';
import Actions from './actions/Actions';
import AddAnswer from './add_answer/AddAnswer';
import ReadAnswers from './read_answers/ReadAnswers';
import styles from './Question.module.scss';

const Question = ({ question }) => {
  const [showAddAnswer, setShowAddAnswer] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className={styles.question}>
      <Header
        postedOn={question.postedOn}
        postedBy={question.postedBy}
        question={question.question}
      />
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
      />
      <ReadAnswers answers={question.answers} showAnswers={showAnswers} />
    </div>
  );
};

export default Question;
