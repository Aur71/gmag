import { useState, useEffect } from 'react';
import Author from './author/Author';
import Content from './content/Content';
import Actions from './actions/Actions';
import AddComment from './add_comment/AddComment';
import Comments from './comments/Comments';
import styles from './Review.module.scss';

const Review = ({ review, currentPage, sortBy, filterBy, searchTerm }) => {
  const { createdAt, postedBy, title, stars, content, comments } = review;
  const [showAddComment, setShowAddComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setShowAddComment(false);
    setShowComments(false);
  }, [currentPage, sortBy, filterBy, searchTerm]);

  return (
    <div className={styles.review}>
      <Author createdAt={createdAt} postedBy={postedBy} />
      <Content title={title} stars={stars} content={content} />
      <Actions
        numberOfComments={comments.length}
        showAddComment={showAddComment}
        setShowAddComment={setShowAddComment}
        showComments={showComments}
        setShowComments={setShowComments}
        review={review}
      />
      <AddComment
        showAddComment={showAddComment}
        setShowAddComment={setShowAddComment}
        reviewId={review._id}
      />
      <Comments
        comments={comments}
        showComments={showComments}
        review={review}
      />
    </div>
  );
};

export default Review;
