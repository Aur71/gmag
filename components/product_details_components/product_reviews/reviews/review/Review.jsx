import Author from './author/Author';
import Content from './content/Content';
import Actions from './actions/Actions';
import styles from './Review.module.scss';

const Review = () => {
  return (
    <div className={styles.review}>
      <Author />
      <Content />
      <Actions />
    </div>
  );
};

export default Review;
