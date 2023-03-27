/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Link from 'next/link';
import AddRating from './add_rating/AddRating';
import styles from './ReviewForm.module.scss';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [reviewError, setReviewError] = useState('');

  const handleTitle = (e) => {
    const value = e.target.value;
    if (value.length > 500) return;
    setTitle(e.target.value);
  };
  const handleReview = (e) => {
    const value = e.target.value;
    if (value.length > 5000) return;
    setReview(e.target.value);
  };

  const checkRating = () => {
    if (!rating) {
      setRatingError('add rating');
      return false;
    }
    setRatingError('');
    return true;
  };

  const checkTitle = () => {
    if (!title.length) {
      setTitleError(`can't be empty`);
      return false;
    }
    setTitleError('');
    return true;
  };

  const checkReview = () => {
    if (!review.length) {
      setReviewError(`can't be empty`);
      return false;
    }
    setReviewError('');
    return true;
  };

  const handleSubmit = () => {
    const isRatingValid = checkRating();
    const isTitleValid = checkTitle();
    const isReviewValid = checkReview();

    if (isRatingValid && isTitleValid && isReviewValid) {
      console.log('Dispach an action');
    }
  };

  return (
    <div className={styles.review_form}>
      <AddRating
        rating={rating}
        setRating={setRating}
        ratingError={ratingError}
      />

      <div className={styles.input_container}>
        <label htmlFor='review title'>Review title:</label>
        <input
          type='text'
          name='review title'
          placeholder='Your review title...'
          value={title}
          onChange={handleTitle}
          className={titleError && styles.error}
        />
        <div>
          <span className={titleError && styles.active}>{titleError}</span>
          <span>{title.length} / 500</span>
        </div>
      </div>

      <div className={styles.textarea_container}>
        <label htmlFor='review'>Review:</label>
        <textarea
          name='review'
          placeholder='Your review ...'
          value={review}
          onChange={handleReview}
          className={reviewError && styles.error}
        />
        <div>
          <span className={reviewError && styles.active}>{reviewError}</span>
          <span>{review.length} / 5000</span>
        </div>
      </div>

      <p>
        Problems with the product or delivery? <Link href='#'>Let us know</Link>
      </p>

      <p>
        By publishing the review, you agree with the site's{' '}
        <Link href='#'>terms and conditions</Link>
      </p>

      <button onClick={handleSubmit}>Add review</button>
    </div>
  );
};

export default ReviewForm;
