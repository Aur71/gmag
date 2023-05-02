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
  const [starsError, setStarsError] = useState(null);
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState(null);

  // A Function that close the model when clicked outside
  const closeModal = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeAddReviewModal());
  };

  const submitModal = () => {};

  return (
    <div
      className={`${styles.add_review} ${
        showAddReviewModal ? styles.active : null
      }`}
      onClick={closeModal}
    >
      <div className={styles.container} ref={containerRef}>
        <Header product={product} />
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
  );
};

export default AddReview;
