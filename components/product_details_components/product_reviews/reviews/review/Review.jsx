import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Author from './author/Author';
import Content from './content/Content';
import Actions from './actions/Actions';
import AddComment from './add_comment/AddComment';
import Comments from './comments/Comments';
import styles from './Review.module.scss';

const Review = ({ review, currentPage }) => {
  const { createdAt, postedBy, title, stars, content, likes, comments } =
    review;
  const { sortReviews, filterReviews, searchReviews } = useSelector(
    (state) => state.singleProduct
  );
  const [showAddComment, setShowAddComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setShowAddComment(false);
    setShowComments(false);
  }, [currentPage, sortReviews, filterReviews, searchReviews]);

  return (
    <div className={styles.review}>
      <Author createdAt={createdAt} postedBy={postedBy} />
      <Content title={title} stars={stars} content={content} />
      <Actions
        likes={likes.length}
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
