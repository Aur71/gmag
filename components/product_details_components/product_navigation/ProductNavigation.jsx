import { useState, useEffect, useCallback } from 'react';
import styles from './ProductNavigation.module.scss';
import { FaProductHunt } from 'react-icons/fa';
import { MdDescription, MdInfo, MdReviews, MdRecommend } from 'react-icons/md';
import { BsFillQuestionSquareFill, BsFillShareFill } from 'react-icons/bs';

const ProductNavigation = ({
  productShowcaseRef,
  productDescriptionRef,
  productSpecificationsRef,
  productReviewsRef,
  productQuestionsRef,
  productRecommendationsRef,
}) => {
  const [activeSection, setActiveSection] = useState('');

  const scrollTo = (ref) => {
    const target = ref.offsetTop - 90;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight } =
      document.documentElement || document.body;
    const scrollPosition = scrollTop + clientHeight / 2;

    const sections = [
      {
        name: 'productShowcase',
        ref: productShowcaseRef,
      },
      {
        name: 'productDescription',
        ref: productDescriptionRef,
      },
      {
        name: 'productSpecifications',
        ref: productSpecificationsRef,
      },
      {
        name: 'productReviews',
        ref: productReviewsRef,
      },
      {
        name: 'productQuestions',
        ref: productQuestionsRef,
      },
      {
        name: 'productRecommendations',
        ref: productRecommendationsRef,
      },
    ];

    for (let i = 0; i < sections.length; i++) {
      const { name, ref } = sections[i];

      if (
        ref &&
        ref.offsetTop - 90 <= scrollPosition &&
        ref.offsetTop - 90 + ref.offsetHeight > scrollPosition
      ) {
        setActiveSection(name);
        break;
      }
    }
  }, [
    productShowcaseRef,
    productDescriptionRef,
    productSpecificationsRef,
    productReviewsRef,
    productQuestionsRef,
    productRecommendationsRef,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    productShowcaseRef,
    productDescriptionRef,
    productSpecificationsRef,
    productReviewsRef,
    productQuestionsRef,
    productRecommendationsRef,
    handleScroll,
  ]);

  return (
    <nav className={styles.product_navigation}>
      <button
        className={activeSection === 'productShowcase' ? styles.active : ''}
        onClick={() => scrollTo(productShowcaseRef)}
      >
        <span>Product</span>
        <FaProductHunt className={styles.icon} />
      </button>

      <button
        className={activeSection === 'productDescription' ? styles.active : ''}
        onClick={() => scrollTo(productDescriptionRef)}
      >
        <span>Description</span>
        <MdDescription className={styles.icon} />
      </button>

      <button
        className={
          activeSection === 'productSpecifications' ? styles.active : ''
        }
        onClick={() => scrollTo(productSpecificationsRef)}
      >
        <span>Specifications</span>
        <MdInfo className={styles.icon} />
      </button>

      <button
        className={activeSection === 'productReviews' ? styles.active : ''}
        onClick={() => scrollTo(productReviewsRef)}
      >
        <span>Reviews</span>
        <MdReviews className={styles.icon} />
      </button>

      <button
        className={activeSection === 'productQuestions' ? styles.active : ''}
        onClick={() => scrollTo(productQuestionsRef)}
      >
        <span>Questions</span>
        <BsFillQuestionSquareFill className={styles.icon} />
      </button>

      <button
        className={
          activeSection === 'productRecommendations' ? styles.active : ''
        }
        onClick={() => scrollTo(productRecommendationsRef)}
      >
        <span>Recommendations</span>
        <MdRecommend className={styles.icon} />
      </button>

      <button>
        <span>Share</span>
        <BsFillShareFill className={styles.icon} />
      </button>
    </nav>
  );
};

export default ProductNavigation;
