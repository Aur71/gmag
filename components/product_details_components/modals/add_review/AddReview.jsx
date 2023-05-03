import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../modal_components/header/Header';
import Stars from '../modal_components/stars/Stars';
import Title from '../modal_components/title/Title';
import Content from '../modal_components/content/Content';
import Links from '../modal_components/links/Links';
import SubmitBtn from '../modal_components/submit_btn/SubmitBtn';
import axios from 'axios';
import styles from './AddReview.module.scss';
import { closeAddReviewModal } from '@/redux/reducers/reviewsSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import validateStars from '../modal_components/functions/validateStars';
import validateTitle from '../modal_components/functions/validateTitle';
import validateContent from '../modal_components/functions/validateContent';

const AddReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { showAddReviewModal } = useSelector((state) => state.reviews);
  const { user } = useSelector((state) => state.user);
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

  const submitModal = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }

    const areStarsValid = validateStars(stars);
    const isTitleValid = validateTitle(title);
    const isContentValid = validateContent(content);

    if (areStarsValid.error) setStarsError(areStarsValid.error);
    else setStarsError('');
    if (isTitleValid.error) setTitleError(isTitleValid.error);
    else setTitleError('');
    if (isContentValid.error) setContentError(isContentValid.error);
    else setContentError('');

    if (
      !areStarsValid.error &&
      !isTitleValid.error &&
      !isContentValid.error &&
      user
    ) {
      const url = `http://localhost:3000/api/v1/reviews/${router.query.id}`;
      const data = { stars, title, content };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
      setLoading(true);

      await axios
        .post(url, data, { headers })
        .then((response) => {
          router.push(router.asPath);
          setStars(0);
          setTitle('');
          setContent('');
          const notification = {
            type: 'success',
            message: response.data,
          };
          dispatch(addNotification(notification));
          closeModal();
          setLoading(false);
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: error.message,
          };
          dispatch(addNotification(notification));
          setLoading(false);
        });
    }
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
