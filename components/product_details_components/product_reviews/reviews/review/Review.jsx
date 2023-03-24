import { useState } from 'react';
import Author from './author/Author';
import Content from './content/Content';
import Actions from './actions/Actions';
import AddComment from './add_comment/AddComment';
import Comments from './comments/Comments';
import styles from './Review.module.scss';

const Review = ({ review }) => {
  const { postedOn, postedBy, title, stars, content, likes, comments } = review;
  const [showAddComment, setShowAddComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={styles.review}>
      <Author postedOn={postedOn} postedBy={postedBy} />
      <Content title={title} stars={stars} content={content} />
      <Actions
        likes={likes}
        numberOfComments={comments.length}
        showAddComment={showAddComment}
        setShowAddComment={setShowAddComment}
        showComments={showComments}
        setShowComments={setShowComments}
      />
      <AddComment
        showAddComment={showAddComment}
        setShowAddComment={setShowAddComment}
      />
      <Comments comments={comments} showComments={showComments} />
    </div>
  );
};

export default Review;
