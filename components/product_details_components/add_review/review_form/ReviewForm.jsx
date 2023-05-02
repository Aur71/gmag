/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import axios from 'axios';
import AddRating from './add_rating/AddRating';
import styles from './ReviewForm.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import { handleShowAddReview } from '@/redux/reducers/singleProductSlice';

const ReviewForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [reviewError, setReviewError] = useState('');

  // updateing the title
  const handleTitle = (e) => {
    const value = e.target.value;
    if (value.length > 100) return;
    setTitle(e.target.value);
  };
  // updateing the review
  const handleReview = (e) => {
    const value = e.target.value;
    if (value.length > 500) return;
    setReview(e.target.value);
  };
  // checking the fields
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
  // submiting the form
  const handleSubmit = () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }
    const isRatingValid = checkRating();
    const isTitleValid = checkTitle();
    const isReviewValid = checkReview();

    if (isRatingValid && isTitleValid && isReviewValid && user) {
      const url = `http://localhost:3000/api/v1/reviews/${router.query.id}`;
      const data = {
        stars: rating,
        title: title,
        content: review,
      };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };

      axios
        .post(url, data, { headers })
        .then((response) => {
          console.log(response.data);
          router.push(router.asPath);
          setRating(0);
          setTitle('');
          setReview('');
          setRatingError('');
          setTitleError('');
          setReviewError('');
          dispatch(handleShowAddReview(false));
        })
        .catch((error) => {
          console.error(error.response.data);
        });
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
          <span>{title.length} / 100</span>
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
          <span>{review.length} / 500</span>
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
