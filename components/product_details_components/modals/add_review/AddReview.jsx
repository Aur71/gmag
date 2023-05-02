import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../modal_components/header/Header';
import Stars from '../modal_components/stars/Stars';
import Title from '../modal_components/title/Title';
import Content from '../modal_components/content/Content';
import Links from '../modal_components/links/Links';
import SubmitBtn from '../modal_components/submit_btn/SubmitBtn';
import styles from './AddReview.module.scss';
import { closeAddReviewModal } from '@/redux/reducers/reviewsSlice';

const AddReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const router = useRouter();
  const { showAddReviewModal } = useSelector((state) => state.reviews);
  const [stars, setStars] = useState(0);
  const [starsError, setStarsError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');

  // A Function that close the model when clicked outside
  const clickOutSide = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeAddReviewModal());
  };
  const closeModal = () => {
    dispatch(closeAddReviewModal());
  };

  const submitModal = () => {};

  // const handleTitle = (e) => {
  //   const value = e.target.value;
  //   if (value.length > 100) return;
  //   setTitle(e.target.value);
  // };
  // // updateing the review
  // const handleReview = (e) => {
  //   const value = e.target.value;
  //   if (value.length > 500) return;
  //   setReview(e.target.value);
  // };
  // // checking the fields
  // const checkRating = () => {
  //   if (!rating) {
  //     setRatingError('add rating');
  //     return false;
  //   }
  //   setRatingError('');
  //   return true;
  // };
  // const checkTitle = () => {
  //   if (!title.length) {
  //     setTitleError(`can't be empty`);
  //     return false;
  //   }
  //   setTitleError('');
  //   return true;
  // };
  // const checkReview = () => {
  //   if (!review.length) {
  //     setReviewError(`can't be empty`);
  //     return false;
  //   }
  //   setReviewError('');
  //   return true;
  // };
  // // submiting the form
  // const handleSubmit = () => {
  //   if (!user) {
  //     const notification = {
  //       type: 'error',
  //       message: 'You must be logged in.',
  //     };
  //     dispatch(addNotification(notification));
  //     return;
  //   }
  //   const isRatingValid = checkRating();
  //   const isTitleValid = checkTitle();
  //   const isReviewValid = checkReview();

  //   if (isRatingValid && isTitleValid && isReviewValid && user) {
  //     const url = `http://localhost:3000/api/v1/reviews/${router.query.id}`;
  //     const data = {
  //       stars: rating,
  //       title: title,
  //       content: review,
  //     };
  //     const headers = {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${user.token}`,
  //     };

  //     axios
  //       .post(url, data, { headers })
  //       .then((response) => {
  //         console.log(response.data);
  //         router.push(router.asPath);
  //         setRating(0);
  //         setTitle('');
  //         setReview('');
  //         setRatingError('');
  //         setTitleError('');
  //         setReviewError('');
  //         dispatch(handleShowAddReview(false));
  //       })
  //       .catch((error) => {
  //         console.error(error.response.data);
  //       });
  //   }
  // };

  return (
    <div
      className={`${styles.add_review} ${
        showAddReviewModal ? styles.active : null
      }`}
      onClick={clickOutSide}
    >
      <div className={styles.container} ref={containerRef}>
        <Header
          closeModal={closeModal}
          product={product}
          title='Add a review for:'
        />

        <div className={styles.wrapper}>
          <Stars stars={stars} setStars={setStars} starsError={starsError} />
          <Title title={title} setTitle={setTitle} titleError={titleError} />
          <Content
            content={content}
            setContent={setContent}
            contentError={contentError}
          />
          <Links />
          <SubmitBtn submitModal={submitModal} />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
