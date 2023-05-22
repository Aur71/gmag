import { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEditReview } from '@/hooks/product_review/useEditReview';
import Header from '../modal_components/header/Header';
import Stars from '../modal_components/stars/Stars';
import Title from '../modal_components/title/Title';
import Content from '../modal_components/content/Content';
import Links from '../modal_components/links/Links';
import SubmitBtn from '../modal_components/submit_btn/SubmitBtn';
import styles from './EditReview.module.scss';
import { closeEditReviewModal } from '@/redux/reducers/reviewsSlice';
import validateStars from '../modal_components/functions/validateStars';
import validateTitle from '../modal_components/functions/validateTitle';
import validateContent from '../modal_components/functions/validateContent';

const EditReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { showEditReviewModal, activeReview } = useSelector(
    (state) => state.reviews
  );
  const { user } = useSelector((state) => state.user);
  const [stars, setStars] = useState(0);
  const [starsError, setStarsError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const { editReview, loading } = useEditReview();

  // A Function that close the model when clicked outside
  const clickOutSide = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeEditReviewModal());
  };

  const closeModal = useCallback(() => {
    setStars(0);
    setTitle('');
    setContent('');
    setStarsError('');
    setTitleError('');
    setContentError('');
    dispatch(closeEditReviewModal());
  }, [dispatch]);

  const submitModal = async () => {
    const areStarsValid = validateStars(stars);
    const isTitleValid = validateTitle(title);
    const isContentValid = validateContent(content);

    if (areStarsValid.error) setStarsError(areStarsValid.error);
    else setStarsError('');
    if (isTitleValid.error) setTitleError(isTitleValid.error);
    else setTitleError('');
    if (isContentValid.error) setContentError(isContentValid.error);
    else setContentError('');

    if (!areStarsValid.error && !isTitleValid.error && !isContentValid.error)
      editReview(stars, title, content, closeModal);
  };

  // This useEffect prevents the user to send a request for updateing a review if the review is not posted by the current user.
  useEffect(() => {
    if (activeReview && activeReview.postedBy._id === user._id) {
      setStars(activeReview.stars);
      setTitle(activeReview.title);
      setContent(activeReview.content);
    } else closeModal();
  }, [activeReview, user, dispatch, closeModal]);

  return (
    <div
      className={`${styles.edit_review} ${
        showEditReviewModal ? styles.active : null
      }`}
      onClick={clickOutSide}
    >
      <div className={styles.container} ref={containerRef}>
        <Header
          closeModal={closeModal}
          product={product}
          title='Edit a review for:'
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
          <SubmitBtn
            submitModal={submitModal}
            loading={loading}
            textContent='Update review'
          />
        </div>
      </div>
    </div>
  );
};

export default EditReview;
