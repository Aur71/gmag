import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddReview } from '@/hooks/product_review/useAddReview';
import Header from '../modal_components/header/Header';
import Stars from '../modal_components/stars/Stars';
import Title from '../modal_components/title/Title';
import Content from '../modal_components/content/Content';
import Links from '../modal_components/links/Links';
import SubmitBtn from '../modal_components/submit_btn/SubmitBtn';
import styles from './AddReview.module.scss';
import { closeAddReviewModal } from '@/redux/reducers/reviewsSlice';
import validateStars from '../modal_components/functions/validateStars';
import validateTitle from '../modal_components/functions/validateTitle';
import validateContent from '../modal_components/functions/validateContent';

const AddReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { showAddReviewModal } = useSelector((state) => state.reviews);
  const [stars, setStars] = useState(0);
  const [starsError, setStarsError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const { addReview, loading } = useAddReview();

  // A Function that close the model when clicked outside
  const clickOutSide = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeAddReviewModal());
  };

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
      addReview(stars, title, content, setStars, setTitle, setContent);
  };

  return (
    <div
      className={`${styles.add_review} ${
        showAddReviewModal ? styles.active : null
      }`}
      onClick={clickOutSide}
    >
      <div className={styles.container} ref={containerRef}>
        <Header
          closeModal={() => dispatch(closeAddReviewModal())}
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
          <SubmitBtn
            submitModal={submitModal}
            loading={loading}
            textContent='Add review'
          />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
